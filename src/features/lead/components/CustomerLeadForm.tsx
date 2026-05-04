'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import { submitCustomerLead, CustomerLeadData } from '@/features/lead'
import TextInput from '@/components/form/TextInput'
import SelectInput from '@/components/form/SelectInput'
import RadioGroup from '@/components/form/RadioGroup'

interface CustomerLeadFormProps {
    onSuccess?: () => void
    onCancel?: () => void
}

export default function CustomerLeadForm({ onSuccess, onCancel }: CustomerLeadFormProps) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [formData, setFormData] = useState<CustomerLeadData>({
        full_name: '',
        phone: '',
        customer_type: '',
        address: '',
        district: '',
        installation_site_type: '',
        installation_site_type_other: '',
        electricity_source: '',
        meter_type: '',
        daytime_usage: '',
        system_type: '',
        main_purpose: '',
        main_purpose_other: '',
        budget_range: '',
        payment_preference: '',
        roof_size: '',
        roof_type: '',
        roof_type_other: '',
        installation_area: '',
        lead_source: '',
        lead_source_other: '',
        decision_maker: '',
        decision_time: '',
        whatsapp: '',
        email: '',
        nid: '',
        google_map: '',
        monthly_bill: undefined,
        system_size_kw: undefined,
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const result = await submitCustomerLead(formData)

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
                {/* Personal Information */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
                </div>

                <TextInput
                    label="Full Name"
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
                    label="WhatsApp"
                    name="whatsapp"
                    type="tel"
                    value={formData.whatsapp}
                    onChange={(value) => handleInputChange('whatsapp', value)}
                />

                <TextInput
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(value) => handleInputChange('email', value)}
                />

                <TextInput
                    label="NID/Business ID"
                    name="nid"
                    value={formData.nid}
                    onChange={(value) => handleInputChange('nid', value)}
                />

                <SelectInput
                    label="Customer Type"
                    value={formData.customer_type}
                    onChange={(value) => handleInputChange('customer_type', value)}
                    options={[
                        { label: 'Residential (বাড়ি)', value: 'residential' },
                        { label: 'Commercial (দোকান/অফিস)', value: 'commercial' },
                        { label: 'Industrial (ফ্যাক্টরি)', value: 'industrial' },
                        { label: 'Agricultural (কৃষি/সেচ)', value: 'agricultural' },
                    ]}
                    required
                />

                {/* Address Information */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Address Information</h3>
                </div>

                <div className="md:col-span-2">
                    <TextInput
                        label="Address"
                        name="address"
                        value={formData.address}
                        onChange={(value) => handleInputChange('address', value)}
                        textarea
                        required
                    />
                </div>

                <TextInput
                    label="District"
                    name="district"
                    value={formData.district}
                    onChange={(value) => handleInputChange('district', value)}
                    required
                />

                <TextInput
                    label="Google Map Link"
                    name="google_map"
                    type="url"
                    value={formData.google_map}
                    onChange={(value) => handleInputChange('google_map', value)}
                />

                {/* Installation Details */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Installation Details</h3>
                </div>

                <SelectInput
                    label="Installation Site Type"
                    value={formData.installation_site_type}
                    onChange={(value) => handleInputChange('installation_site_type', value)}
                    options={[
                        { label: 'Rooftop', value: 'rooftop' },
                        { label: 'Ground', value: 'ground' },
                        { label: 'Other', value: 'other' },
                    ]}
                    required
                />

                {formData.installation_site_type === 'other' && (
                    <TextInput
                        label="Please specify"
                        name="installation_site_type_other"
                        value={formData.installation_site_type_other}
                        onChange={(value) => handleInputChange('installation_site_type_other', value)}
                        required
                        placeholder="Enter installation site type"
                    />
                )}

                <SelectInput
                    label="Electricity Source"
                    value={formData.electricity_source}
                    onChange={(value) => handleInputChange('electricity_source', value)}
                    options={[
                        { label: 'Grid', value: 'grid' },
                        { label: 'Generator', value: 'generator' },
                        { label: 'Solar', value: 'solar' },
                    ]}
                    required
                />

                <SelectInput
                    label="Meter Type"
                    value={formData.meter_type}
                    onChange={(value) => handleInputChange('meter_type', value)}
                    options={[
                        { label: 'Single Phase', value: 'single_phase' },
                        { label: 'Three Phase', value: 'three_phase' },
                    ]}
                    required
                />

                <SelectInput
                    label="Daytime Usage"
                    value={formData.daytime_usage}
                    onChange={(value) => handleInputChange('daytime_usage', value)}
                    options={[
                        { label: 'Low (0-30%)', value: 'low' },
                        { label: 'Medium (30-60%)', value: 'medium' },
                        { label: 'High (60-100%)', value: 'high' },
                    ]}
                    required
                />

                {/* System Details */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">System Details</h3>
                </div>

                <SelectInput
                    label="System Type"
                    value={formData.system_type}
                    onChange={(value) => handleInputChange('system_type', value)}
                    options={[
                        { label: 'On-Grid', value: 'on_grid' },
                        { label: 'Off-Grid', value: 'off_grid' },
                        { label: 'Hybrid', value: 'hybrid' },
                    ]}
                    required
                />

                <TextInput
                    label="System Size (kW)"
                    name="system_size_kw"
                    type="number"
                    value={formData.system_size_kw?.toString() || ''}
                    onChange={(value) => handleInputChange('system_size_kw', value ? parseFloat(value) : undefined)}
                />

                <SelectInput
                    label="Main Purpose"
                    value={formData.main_purpose}
                    onChange={(value) => handleInputChange('main_purpose', value)}
                    options={[
                        { label: 'Reduce Electricity Bill', value: 'Reduce_Electricity_Bill' },
                        { label: 'Backup Power', value: 'Backup_Power' },
                        { label: 'Business Investment', value: 'Business_Investment' },
                        { label: 'Other', value: 'other' },
                    ]}
                    required
                />

                {formData.main_purpose === 'other' && (
                    <TextInput
                        label="Please specify"
                        name="main_purpose_other"
                        value={formData.main_purpose_other}
                        onChange={(value) => handleInputChange('main_purpose_other', value)}
                        required
                        placeholder="Enter main purpose"
                    />
                )}

                <TextInput
                    label="Monthly Bill (BDT)"
                    name="monthly_bill"
                    type="number"
                    value={formData.monthly_bill?.toString() || ''}
                    onChange={(value) => handleInputChange('monthly_bill', value ? parseFloat(value) : undefined)}
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

                <TextInput
                    label="Installation Area"
                    name="installation_area"
                    value={formData.installation_area}
                    onChange={(value) => handleInputChange('installation_area', value)}
                    required
                />

                <RadioGroup
                    label="Shadow Issue"
                    value={formData.has_shadow ? 'yes' : 'no'}
                    onChange={(value) => handleInputChange('has_shadow', value === 'yes')}
                    options={[
                        { label: 'Yes', value: 'yes' },
                        { label: 'No', value: 'no' },
                    ]}
                />

                {/* Budget & Decision */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Budget & Decision</h3>
                </div>

                <SelectInput
                    label="Budget Range"
                    value={formData.budget_range}
                    onChange={(value) => handleInputChange('budget_range', value)}
                    options={[
                        { label: '< 1 Lakh', value: 'above_1_lakh' },
                        { label: '1-5 Lakh', value: '1_5_lakh' },
                        { label: '5-20 Lakh', value: '5_20_lakh' },
                        { label: '20+ Lakh', value: '20_plus_lakh' },
                    ]}
                    required
                />

                <SelectInput
                    label="Payment Preference"
                    value={formData.payment_preference}
                    onChange={(value) => handleInputChange('payment_preference', value)}
                    options={[
                        { label: 'Cash', value: 'cash' },
                        { label: 'EMI', value: 'EMI' },
                        { label: 'Bank Loan', value: 'bank_loan' },
                        { label: 'Lease Model', value: 'lease_model' },
                    ]}
                    required
                />

                <SelectInput
                    label="Lead Source"
                    value={formData.lead_source}
                    onChange={(value) => handleInputChange('lead_source', value)}
                    options={[
                        { label: 'Facebook', value: 'facebook' },
                        { label: 'Google', value: 'google' },
                        { label: 'YouTube', value: 'youtube' },
                        { label: 'Referral', value: 'referral' },
                        { label: 'Advertisement', value: 'advertisement' },
                        { label: 'Other', value: 'other' },
                    ]}
                    required
                />

                {formData.lead_source === 'other' && (
                    <TextInput
                        label="Please specify"
                        name="lead_source_other"
                        value={formData.lead_source_other}
                        onChange={(value) => handleInputChange('lead_source_other', value)}
                        required
                        placeholder="Enter lead source"
                    />
                )}

                <SelectInput
                    label="Decision Maker"
                    value={formData.decision_maker}
                    onChange={(value) => handleInputChange('decision_maker', value)}
                    options={[
                        { label: 'Self', value: 'self' },
                        { label: 'Family', value: 'family' },
                        { label: 'Company Management', value: 'Company Management' },
                    ]}
                    required
                />

                <SelectInput
                    label="Expected Decision Time"
                    value={formData.decision_time}
                    onChange={(value) => handleInputChange('decision_time', value)}
                    options={[
                        { label: 'Immediate', value: 'immediate' },
                        { label: 'Within 1 Month', value: '1_month' },
                        { label: '3 Months+', value: '3_months_plus' },
                    ]}
                    required
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
