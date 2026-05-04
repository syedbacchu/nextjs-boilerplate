'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { submitCompanyDetails, CompanyDetailsData } from '@/features/lead'
import TextInput from '@/components/form/TextInput'
import SelectInput from '@/components/form/SelectInput'
import RadioGroup from '@/components/form/RadioGroup'

interface CompanyDetailsFormProps {
    onSuccess?: () => void
    onCancel?: () => void
}

export default function CompanyDetailsForm({ onSuccess, onCancel }: CompanyDetailsFormProps) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [formData, setFormData] = useState<CompanyDetailsData>({
        company_name: '',
        full_name: '',
        phone: '',
        address: '',
        grid_connection: '',
        working_shift: '',
        peak_load_time: '',
        roof_size: '',
        roof_type: '',
        roof_type_other: '',
        transformer_capacity: undefined,
        contract_demand: undefined,
        monthly_bill: undefined,
        monthly_consumption: undefined,
        total_connected_load: undefined,
        total_motor_load: undefined,
        daytime_load_percentage: undefined,
        demand_factor: undefined,
        diversity_factor: undefined,
        maximum_demand: undefined,
        daily_consumption: undefined,
        solar_target_percent: undefined,
        required_capacity_kw: undefined,
        system_size_kw: undefined,
        backup_hours: undefined,
        critical_load: undefined,
        inverter_size: undefined,
        panel_size: undefined,
        panel_quantity: undefined,
        estimated_project_cost: undefined,
        expected_payback_period: undefined,
        machinery_load_details: [],
        motor_load_details: [],
        google_map: '',
        has_shadow: false,
        customer_signature: '',
        declaration_date: '',
    })

    const handleInputChange = (name: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }))
    }

    const addMachineryLoad = () => {
        setFormData(prev => ({
            ...prev,
            machinery_load_details: [
                ...(prev.machinery_load_details || []),
                { machine_name: '', qty: 1, rated_power_kw: 0, running_hours_per_day: 0, total_kw: 0 },
            ],
        }))
    }

    const updateMachineryLoad = (index: number, field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            machinery_load_details: prev.machinery_load_details?.map((item, i) =>
                i === index ? { ...item, [field]: field === 'machine_name' ? value : Number(value) } : item
            ),
        }))
    }

    const removeMachineryLoad = (index: number) => {
        setFormData(prev => ({
            ...prev,
            machinery_load_details: prev.machinery_load_details?.filter((_, i) => i !== index),
        }))
    }

    const addMotorLoad = () => {
        setFormData(prev => ({
            ...prev,
            motor_load_details: [
                ...(prev.motor_load_details || []),
                { motor_type: '', qty: 1, hp: 0, kw: 0, starting_type: '' },
            ],
        }))
    }

    const updateMotorLoad = (index: number, field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            motor_load_details: prev.motor_load_details?.map((item, i) =>
                i === index ? { ...item, [field]: field === 'motor_type' || field === 'starting_type' ? value : Number(value) } : item
            ),
        }))
    }

    const removeMotorLoad = (index: number) => {
        setFormData(prev => ({
            ...prev,
            motor_load_details: prev.motor_load_details?.filter((_, i) => i !== index),
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const result = await submitCompanyDetails(formData)

            if (result.success) {
                toast.success(result.message || 'Form submitted successfully!')
                setTimeout(() => {
                    if (onSuccess) {
                        onSuccess()
                    } else if (result.leadId) {
                        router.push(`/leads/thank-you/${result.leadId}`)
                    } else {
                        router.push('/leads/thank-you/success')
                    }
                }, 1500)
            } else {
                toast.error(result.error || 'Failed to submit form')
            }
        } catch (error) {
            toast.error('An error occurred. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
                {/* Company Information */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Company Information</h3>
                </div>

                <TextInput
                    label="Company Name"
                    name="company_name"
                    value={formData.company_name}
                    onChange={(value) => handleInputChange('company_name', value)}
                    required
                />

                <TextInput
                    label="Contact Person Name"
                    name="full_name"
                    value={formData.full_name}
                    onChange={(value) => handleInputChange('full_name', value)}
                    required
                />

                <TextInput
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(value) => handleInputChange('phone', value)}
                    required
                />
                <TextInput
                    label="Factory Location(google map)"
                    name="google_map"
                    type="url"
                    value={formData.google_map}
                    onChange={(value) => handleInputChange('google_map', value)}
                />
                <div className="md:col-span-2">
                    <TextInput
                        label="Factory Address"
                        name="address"
                        value={formData.address}
                        onChange={(value) => handleInputChange('address', value)}
                        textarea
                        required
                    />
                </div>







                {/* Electrical Parameters */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Electrical Parameters</h3>
                </div>
                <SelectInput
                    label="Grid Connection"
                    value={formData.grid_connection}
                    onChange={(value) => handleInputChange('grid_connection', value)}
                    options={[
                        { label: 'Single Phase', value: 'single_phase' },
                        { label: 'Three Phase', value: 'three_phase' },
                    ]}
                    required
                />
                <TextInput
                    label="Transformer Capacity (KVA)"
                    name="transformer_capacity"
                    type="number"
                    value={formData.transformer_capacity?.toString() || ''}
                    onChange={(value) => handleInputChange('transformer_capacity', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Contract Demand (kW)"
                    name="contract_demand"
                    type="number"
                    value={formData.contract_demand?.toString() || ''}
                    onChange={(value) => handleInputChange('contract_demand', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Monthly Bill (BDT)"
                    name="monthly_bill"
                    type="number"
                    value={formData.monthly_bill?.toString() || ''}
                    onChange={(value) => handleInputChange('monthly_bill', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Monthly Consumption (kWh)"
                    name="monthly_consumption"
                    type="number"
                    value={formData.monthly_consumption?.toString() || ''}
                    onChange={(value) => handleInputChange('monthly_consumption', value ? parseFloat(value) : undefined)}
                />

                {/* Machinery Load Details */}
                <div className="space-y-4 md:col-span-2">
                    <div className="flex items-center justify-between border-b pb-2">
                        <h3 className="text-lg font-semibold text-gray-900">Machinery Load Details</h3>
                        <button
                            type="button"
                            onClick={addMachineryLoad}
                            className="rounded-md bg-blue-600 px-3 py-1 text-sm font-medium text-white hover:bg-blue-700"
                        >
                            + Add Machinery
                        </button>
                    </div>

                    {formData.machinery_load_details?.map((machinery, index) => (
                        <div key={index} className="grid gap-4 rounded-md border p-4 md:grid-cols-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Machine Name</label>
                                <input
                                    type="text"
                                    value={machinery.machine_name}
                                    onChange={(e) => updateMachineryLoad(index, 'machine_name', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={machinery.qty}
                                    onChange={(e) => updateMachineryLoad(index, 'qty', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Rated Power (kW)</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={machinery.rated_power_kw}
                                    onChange={(e) => updateMachineryLoad(index, 'rated_power_kw', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Running Hours/Day</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    max="24"
                                    value={machinery.running_hours_per_day}
                                    onChange={(e) => updateMachineryLoad(index, 'running_hours_per_day', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex items-end">
                                <button
                                    type="button"
                                    onClick={() => removeMachineryLoad(index)}
                                    className="w-full rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <TextInput
                    label="Total Connected Load (kW)"
                    name="total_connected_load"
                    type="number"
                    value={formData.total_connected_load?.toString() || ''}
                    onChange={(value) => handleInputChange('total_connected_load', value ? parseFloat(value) : undefined)}
                />


                {/* Motor Load Details */}
                <div className="space-y-4 md:col-span-2">
                    <div className="flex items-center justify-between border-b pb-2">
                        <h3 className="text-lg font-semibold text-gray-900">Motor Load Details</h3>
                        <button
                            type="button"
                            onClick={addMotorLoad}
                            className="rounded-md bg-blue-600 px-3 py-1 text-sm font-medium text-white hover:bg-blue-700"
                        >
                            + Add Motor
                        </button>
                    </div>

                    {formData.motor_load_details?.map((motor, index) => (
                        <div key={index} className="grid gap-4 rounded-md border p-4 md:grid-cols-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Motor Type</label>
                                <input
                                    type="text"
                                    value={motor.motor_type}
                                    onChange={(e) => updateMotorLoad(index, 'motor_type', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Quantity</label>
                                <input
                                    type="number"
                                    min="1"
                                    value={motor.qty}
                                    onChange={(e) => updateMotorLoad(index, 'qty', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">HP</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={motor.hp}
                                    onChange={(e) => updateMotorLoad(index, 'hp', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">kW</label>
                                <input
                                    type="number"
                                    step="0.01"
                                    value={motor.kw}
                                    onChange={(e) => updateMotorLoad(index, 'kw', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Starting Type</label>
                                <input
                                    type="text"
                                    value={motor.starting_type}
                                    onChange={(e) => updateMotorLoad(index, 'starting_type', e.target.value)}
                                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                                />
                            </div>
                            <div className="flex items-end">
                                <button
                                    type="button"
                                    onClick={() => removeMotorLoad(index)}
                                    className="w-full rounded-md border border-red-300 bg-red-50 px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-100"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>



                <TextInput
                    label="Total Motor Load (kW)"
                    name="total_motor_load"
                    type="number"
                    value={formData.total_motor_load?.toString() || ''}
                    onChange={(value) => handleInputChange('total_motor_load', value ? parseFloat(value) : undefined)}
                />

                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Operating Pattern</h3>
                </div>
                <SelectInput
                    label="Working Shift"
                    value={formData.working_shift}
                    onChange={(value) => handleInputChange('working_shift', value)}
                    options={[
                        { label: '8 Hours', value: '8_hours' },
                        { label: '12 Hours', value: '12_hours' },
                        { label: '24 Hours', value: '24_hours' },
                    ]}
                    required
                />

                <TextInput
                    label="Peak Load Time"
                    name="peak_load_time"
                    value={formData.peak_load_time}
                    onChange={(value) => handleInputChange('peak_load_time', value)}
                    placeholder="e.g., 10 AM - 2 PM"
                    required
                />

                <TextInput
                    label="Daytime Load Percentage (%)"
                    name="daytime_load_percentage"
                    type="number"
                    value={formData.daytime_load_percentage?.toString() || ''}
                    onChange={(value) => handleInputChange('daytime_load_percentage', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Demand Factor (0-1)"
                    name="demand_factor"
                    type="number"
                    step="0.01"
                    value={formData.demand_factor?.toString() || ''}
                    onChange={(value) => handleInputChange('demand_factor', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Diversity Factor (0-1)"
                    name="diversity_factor"
                    type="number"
                    step="0.01"
                    value={formData.diversity_factor?.toString() || ''}
                    onChange={(value) => handleInputChange('diversity_factor', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Maximum Demand (kW)"
                    name="maximum_demand"
                    type="number"
                    value={formData.maximum_demand?.toString() || ''}
                    onChange={(value) => handleInputChange('maximum_demand', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Daily Consumption (kWh)"
                    name="daily_consumption"
                    type="number"
                    value={formData.daily_consumption?.toString() || ''}
                    onChange={(value) => handleInputChange('daily_consumption', value ? parseFloat(value) : undefined)}
                />

                {/* System Requirements */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">System Requirements</h3>
                </div>

                <TextInput
                    label="Solar Target Percentage (%)"
                    name="solar_target_percent"
                    type="number"
                    value={formData.solar_target_percent?.toString() || ''}
                    onChange={(value) => handleInputChange('solar_target_percent', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Required Capacity (kW)"
                    name="required_capacity_kw"
                    type="number"
                    value={formData.required_capacity_kw?.toString() || ''}
                    onChange={(value) => handleInputChange('required_capacity_kw', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="System Size (kW)"
                    name="system_size_kw"
                    type="number"
                    value={formData.system_size_kw?.toString() || ''}
                    onChange={(value) => handleInputChange('system_size_kw', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Backup Hours"
                    name="backup_hours"
                    type="number"
                    value={formData.backup_hours?.toString() || ''}
                    onChange={(value) => handleInputChange('backup_hours', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Critical Load (kW)"
                    name="critical_load"
                    type="number"
                    value={formData.critical_load?.toString() || ''}
                    onChange={(value) => handleInputChange('critical_load', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Inverter Size (kW)"
                    name="inverter_size"
                    type="number"
                    value={formData.inverter_size?.toString() || ''}
                    onChange={(value) => handleInputChange('inverter_size', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Panel Size (Wp)"
                    name="panel_size"
                    type="number"
                    value={formData.panel_size?.toString() || ''}
                    onChange={(value) => handleInputChange('panel_size', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Panel Quantity"
                    name="panel_quantity"
                    type="number"
                    value={formData.panel_quantity?.toString() || ''}
                    onChange={(value) => handleInputChange('panel_quantity', value ? parseFloat(value) : undefined)}
                />

                {/* Roof Details */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Roof Details</h3>
                </div>

                <TextInput
                    label="Roof Size (approx sq. ft)"
                    name="roof_size"
                    type="number"
                    value={formData.roof_size}
                    onChange={(value) => handleInputChange('roof_size', value)}
                    required
                    placeholder="Enter roof size in sq. ft"
                />

                <SelectInput
                    label="Roof Type"
                    value={formData.roof_type}
                    onChange={(value) => handleInputChange('roof_type', value)}
                    options={[
                        { label: 'Concrete', value: 'concrete' },
                        { label: 'Tin Shade', value: 'tin_shade' },
                        { label: 'Other', value: 'other' },
                    ]}
                    required
                />
                {formData.roof_type === 'other' && (
                    <TextInput
                        label="Please specify"
                        name="roof_type_other"
                        value={formData.roof_type_other}
                        onChange={(value) => handleInputChange('roof_type_other', value)}
                        required
                        placeholder="Enter roof type"
                    />
                )}

                <RadioGroup
                    label="Shadow Issue"
                    value={formData.has_shadow ? 'yes' : 'no'}
                    onChange={(value) => handleInputChange('has_shadow', value === 'yes')}
                    options={[
                        { label: 'Yes', value: 'yes' },
                        { label: 'No', value: 'no' },
                    ]}
                />




                {/* Cost Analysis */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Cost Analysis</h3>
                </div>

                <TextInput
                    label="Estimated Project Cost (BDT)"
                    name="estimated_project_cost"
                    type="number"
                    value={formData.estimated_project_cost?.toString() || ''}
                    onChange={(value) => handleInputChange('estimated_project_cost', value ? parseFloat(value) : undefined)}
                />

                <TextInput
                    label="Expected Payback Period (Years)"
                    name="expected_payback_period"
                    type="number"
                    step="0.01"
                    value={formData.expected_payback_period?.toString() || ''}
                    onChange={(value) => handleInputChange('expected_payback_period', value ? parseFloat(value) : undefined)}
                />

                {/* Declaration */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Declaration</h3>
                </div>

                <TextInput
                    label="Customer Signature"
                    name="customer_signature"
                    value={formData.customer_signature}
                    onChange={(value) => handleInputChange('customer_signature', value)}
                />

                <TextInput
                    label="Declaration Date"
                    name="declaration_date"
                    type="date"
                    value={formData.declaration_date}
                    onChange={(value) => handleInputChange('declaration_date', value)}
                />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                    type="button"
                    onClick={onCancel}
                    disabled={isSubmitting}
                    className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
            </div>
        </form>
    )
}
