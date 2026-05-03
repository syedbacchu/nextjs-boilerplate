'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { submitCompanyDetails, CompanyDetailsData } from '../services/lead.service'

interface CompanyDetailsFormProps {
    onSuccess?: () => void
    onCancel?: () => void
}

export default function CompanyDetailsForm({ onSuccess, onCancel }: CompanyDetailsFormProps) {
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : type === 'number' ? (value ? parseFloat(value) : undefined) : value,
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
                onSuccess?.()
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

                <div>
                    <label htmlFor="company_name" className="block text-sm font-medium text-gray-700">
                        Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="company_name"
                        name="company_name"
                        required
                        value={formData.company_name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
                        Contact Person Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="full_name"
                        name="full_name"
                        required
                        value={formData.full_name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                        Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="address"
                        name="address"
                        required
                        rows={2}
                        value={formData.address}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="grid_connection" className="block text-sm font-medium text-gray-700">
                        Grid Connection <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="grid_connection"
                        name="grid_connection"
                        required
                        value={formData.grid_connection}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Type</option>
                        <option value="230v_single_phase">230V Single Phase</option>
                        <option value="400v_three_phase">400V Three Phase</option>
                        <option value="11kv">11KV</option>
                        <option value="33kv">33KV</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="working_shift" className="block text-sm font-medium text-gray-700">
                        Working Shift <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="working_shift"
                        name="working_shift"
                        required
                        value={formData.working_shift}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Shift</option>
                        <option value="single_shift">Single Shift</option>
                        <option value="double_shift">Double Shift</option>
                        <option value="triple_shift">Triple Shift</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="peak_load_time" className="block text-sm font-medium text-gray-700">
                        Peak Load Time <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="peak_load_time"
                        name="peak_load_time"
                        required
                        placeholder="e.g., 10 AM - 2 PM"
                        value={formData.peak_load_time}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                {/* Electrical Parameters */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Electrical Parameters</h3>
                </div>

                <div>
                    <label htmlFor="transformer_capacity" className="block text-sm font-medium text-gray-700">
                        Transformer Capacity (KVA)
                    </label>
                    <input
                        type="number"
                        id="transformer_capacity"
                        name="transformer_capacity"
                        step="0.01"
                        value={formData.transformer_capacity}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="contract_demand" className="block text-sm font-medium text-gray-700">
                        Contract Demand (kW)
                    </label>
                    <input
                        type="number"
                        id="contract_demand"
                        name="contract_demand"
                        step="0.01"
                        value={formData.contract_demand}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="monthly_bill" className="block text-sm font-medium text-gray-700">
                        Monthly Bill (BDT)
                    </label>
                    <input
                        type="number"
                        id="monthly_bill"
                        name="monthly_bill"
                        step="0.01"
                        value={formData.monthly_bill}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="monthly_consumption" className="block text-sm font-medium text-gray-700">
                        Monthly Consumption (kWh)
                    </label>
                    <input
                        type="number"
                        id="monthly_consumption"
                        name="monthly_consumption"
                        step="0.01"
                        value={formData.monthly_consumption}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="total_connected_load" className="block text-sm font-medium text-gray-700">
                        Total Connected Load (kW)
                    </label>
                    <input
                        type="number"
                        id="total_connected_load"
                        name="total_connected_load"
                        step="0.01"
                        value={formData.total_connected_load}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="total_motor_load" className="block text-sm font-medium text-gray-700">
                        Total Motor Load (kW)
                    </label>
                    <input
                        type="number"
                        id="total_motor_load"
                        name="total_motor_load"
                        step="0.01"
                        value={formData.total_motor_load}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="daytime_load_percentage" className="block text-sm font-medium text-gray-700">
                        Daytime Load Percentage (%)
                    </label>
                    <input
                        type="number"
                        id="daytime_load_percentage"
                        name="daytime_load_percentage"
                        min="0"
                        max="100"
                        step="0.01"
                        value={formData.daytime_load_percentage}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="demand_factor" className="block text-sm font-medium text-gray-700">
                        Demand Factor (0-1)
                    </label>
                    <input
                        type="number"
                        id="demand_factor"
                        name="demand_factor"
                        min="0"
                        max="1"
                        step="0.01"
                        value={formData.demand_factor}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="diversity_factor" className="block text-sm font-medium text-gray-700">
                        Diversity Factor (0-1)
                    </label>
                    <input
                        type="number"
                        id="diversity_factor"
                        name="diversity_factor"
                        min="0"
                        max="1"
                        step="0.01"
                        value={formData.diversity_factor}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="maximum_demand" className="block text-sm font-medium text-gray-700">
                        Maximum Demand (kW)
                    </label>
                    <input
                        type="number"
                        id="maximum_demand"
                        name="maximum_demand"
                        step="0.01"
                        value={formData.maximum_demand}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="daily_consumption" className="block text-sm font-medium text-gray-700">
                        Daily Consumption (kWh)
                    </label>
                    <input
                        type="number"
                        id="daily_consumption"
                        name="daily_consumption"
                        step="0.01"
                        value={formData.daily_consumption}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                {/* System Requirements */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">System Requirements</h3>
                </div>

                <div>
                    <label htmlFor="solar_target_percent" className="block text-sm font-medium text-gray-700">
                        Solar Target Percentage (%)
                    </label>
                    <input
                        type="number"
                        id="solar_target_percent"
                        name="solar_target_percent"
                        min="0"
                        max="100"
                        step="0.01"
                        value={formData.solar_target_percent}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="required_capacity_kw" className="block text-sm font-medium text-gray-700">
                        Required Capacity (kW)
                    </label>
                    <input
                        type="number"
                        id="required_capacity_kw"
                        name="required_capacity_kw"
                        step="0.01"
                        value={formData.required_capacity_kw}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="system_size_kw" className="block text-sm font-medium text-gray-700">
                        System Size (kW)
                    </label>
                    <input
                        type="number"
                        id="system_size_kw"
                        name="system_size_kw"
                        step="0.01"
                        value={formData.system_size_kw}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="backup_hours" className="block text-sm font-medium text-gray-700">
                        Backup Hours
                    </label>
                    <input
                        type="number"
                        id="backup_hours"
                        name="backup_hours"
                        min="0"
                        value={formData.backup_hours}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="critical_load" className="block text-sm font-medium text-gray-700">
                        Critical Load (kW)
                    </label>
                    <input
                        type="number"
                        id="critical_load"
                        name="critical_load"
                        step="0.01"
                        value={formData.critical_load}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="inverter_size" className="block text-sm font-medium text-gray-700">
                        Inverter Size (kW)
                    </label>
                    <input
                        type="number"
                        id="inverter_size"
                        name="inverter_size"
                        step="0.01"
                        value={formData.inverter_size}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="panel_size" className="block text-sm font-medium text-gray-700">
                        Panel Size (Wp)
                    </label>
                    <input
                        type="number"
                        id="panel_size"
                        name="panel_size"
                        step="0.01"
                        value={formData.panel_size}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="panel_quantity" className="block text-sm font-medium text-gray-700">
                        Panel Quantity
                    </label>
                    <input
                        type="number"
                        id="panel_quantity"
                        name="panel_quantity"
                        min="0"
                        value={formData.panel_quantity}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                {/* Roof Details */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Roof Details</h3>
                </div>

                <div>
                    <label htmlFor="roof_size" className="block text-sm font-medium text-gray-700">
                        Roof Size <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="roof_size"
                        name="roof_size"
                        required
                        value={formData.roof_size}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Size</option>
                        <option value="small">Small (&lt;5000 sqft)</option>
                        <option value="medium">Medium (5000-15000 sqft)</option>
                        <option value="large">Large (&gt;15000 sqft)</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="roof_type" className="block text-sm font-medium text-gray-700">
                        Roof Type <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="roof_type"
                        name="roof_type"
                        required
                        value={formData.roof_type}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Type</option>
                        <option value="flat_concrete">Flat Concrete</option>
                        <option value="metal_sheet">Metal Sheet</option>
                        <option value="truss">Truss / GI Shed</option>
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        id="has_shadow"
                        name="has_shadow"
                        checked={formData.has_shadow}
                        onChange={handleInputChange}
                        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="has_shadow" className="text-sm font-medium text-gray-700">
                        Has Shadow
                    </label>
                </div>

                <div>
                    <label htmlFor="google_map" className="block text-sm font-medium text-gray-700">
                        Google Map Link
                    </label>
                    <input
                        type="url"
                        id="google_map"
                        name="google_map"
                        value={formData.google_map}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

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

                {/* Cost Analysis */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Cost Analysis</h3>
                </div>

                <div>
                    <label htmlFor="estimated_project_cost" className="block text-sm font-medium text-gray-700">
                        Estimated Project Cost (BDT)
                    </label>
                    <input
                        type="number"
                        id="estimated_project_cost"
                        name="estimated_project_cost"
                        step="0.01"
                        value={formData.estimated_project_cost}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="expected_payback_period" className="block text-sm font-medium text-gray-700">
                        Expected Payback Period (Years)
                    </label>
                    <input
                        type="number"
                        id="expected_payback_period"
                        name="expected_payback_period"
                        step="0.01"
                        value={formData.expected_payback_period}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                {/* Declaration */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Declaration</h3>
                </div>

                <div>
                    <label htmlFor="customer_signature" className="block text-sm font-medium text-gray-700">
                        Customer Signature
                    </label>
                    <input
                        type="text"
                        id="customer_signature"
                        name="customer_signature"
                        value={formData.customer_signature}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="declaration_date" className="block text-sm font-medium text-gray-700">
                        Declaration Date
                    </label>
                    <input
                        type="date"
                        id="declaration_date"
                        name="declaration_date"
                        value={formData.declaration_date}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>
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
