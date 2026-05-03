'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { submitCustomerLead, CustomerLeadData } from '../services/lead.service'

interface CustomerLeadFormProps {
    onSuccess?: () => void
    onCancel?: () => void
}

export default function CustomerLeadForm({ onSuccess, onCancel }: CustomerLeadFormProps) {
    const [isSubmitting, setIsSubmitting] = useState(false)

    const [formData, setFormData] = useState<CustomerLeadData>({
        full_name: '',
        phone: '',
        customer_type: '',
        address: '',
        district: '',
        installation_site_type: '',
        electricity_source: '',
        meter_type: '',
        daytime_usage: '',
        system_type: '',
        main_purpose: '',
        budget_range: '',
        payment_preference: '',
        roof_size: '',
        roof_type: '',
        installation_area: '',
        lead_source: '',
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

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const result = await submitCustomerLead(formData)

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
                {/* Personal Information */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Personal Information</h3>
                </div>

                <div>
                    <label htmlFor="full_name" className="block text-sm font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
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

                <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                        WhatsApp
                    </label>
                    <input
                        type="tel"
                        id="whatsapp"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="nid" className="block text-sm font-medium text-gray-700">
                        NID
                    </label>
                    <input
                        type="text"
                        id="nid"
                        name="nid"
                        value={formData.nid}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label htmlFor="customer_type" className="block text-sm font-medium text-gray-700">
                        Customer Type <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="customer_type"
                        name="customer_type"
                        required
                        value={formData.customer_type}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Type</option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                    </select>
                </div>

                {/* Address Information */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Address Information</h3>
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
                    <label htmlFor="district" className="block text-sm font-medium text-gray-700">
                        District <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="district"
                        name="district"
                        required
                        value={formData.district}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
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

                {/* Installation Details */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Installation Details</h3>
                </div>

                <div>
                    <label htmlFor="installation_site_type" className="block text-sm font-medium text-gray-700">
                        Installation Site Type <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="installation_site_type"
                        name="installation_site_type"
                        required
                        value={formData.installation_site_type}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Type</option>
                        <option value="rooftop">Rooftop</option>
                        <option value="ground_mount">Ground Mount</option>
                        <option value="carport">Carport</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="electricity_source" className="block text-sm font-medium text-gray-700">
                        Electricity Source <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="electricity_source"
                        name="electricity_source"
                        required
                        value={formData.electricity_source}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Source</option>
                        <option value="grid">Grid</option>
                        <option value="generator">Generator</option>
                        <option value="solar">Solar</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="meter_type" className="block text-sm font-medium text-gray-700">
                        Meter Type <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="meter_type"
                        name="meter_type"
                        required
                        value={formData.meter_type}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Type</option>
                        <option value="single_phase">Single Phase</option>
                        <option value="three_phase">Three Phase</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="daytime_usage" className="block text-sm font-medium text-gray-700">
                        Daytime Usage <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="daytime_usage"
                        name="daytime_usage"
                        required
                        value={formData.daytime_usage}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Usage</option>
                        <option value="low">Low (0-30%)</option>
                        <option value="medium">Medium (30-60%)</option>
                        <option value="high">High (60-100%)</option>
                    </select>
                </div>

                {/* System Details */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">System Details</h3>
                </div>

                <div>
                    <label htmlFor="system_type" className="block text-sm font-medium text-gray-700">
                        System Type <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="system_type"
                        name="system_type"
                        required
                        value={formData.system_type}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Type</option>
                        <option value="on_grid">On-Grid</option>
                        <option value="off_grid">Off-Grid</option>
                        <option value="hybrid">Hybrid</option>
                    </select>
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
                    <label htmlFor="main_purpose" className="block text-sm font-medium text-gray-700">
                        Main Purpose <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="main_purpose"
                        name="main_purpose"
                        required
                        value={formData.main_purpose}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Purpose</option>
                        <option value="bill_reduction">Bill Reduction</option>
                        <option value="backup">Backup Power</option>
                        <option value="environmental">Environmental</option>
                        <option value="independence">Energy Independence</option>
                    </select>
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
                        <option value="small">Small (&lt;1000 sqft)</option>
                        <option value="medium">Medium (1000-3000 sqft)</option>
                        <option value="large">Large (&gt;3000 sqft)</option>
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
                        <option value="flat">Flat</option>
                        <option value="sloped">Sloped</option>
                        <option value="metal">Metal Sheet</option>
                        <option value="tile">Tile</option>
                        <option value="concrete">Concrete</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="installation_area" className="block text-sm font-medium text-gray-700">
                        Installation Area <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="installation_area"
                        name="installation_area"
                        required
                        value={formData.installation_area}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    />
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

                {/* Budget & Decision */}
                <div className="space-y-4 md:col-span-2">
                    <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Budget & Decision</h3>
                </div>

                <div>
                    <label htmlFor="budget_range" className="block text-sm font-medium text-gray-700">
                        Budget Range <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="budget_range"
                        name="budget_range"
                        required
                        value={formData.budget_range}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Range</option>
                        <option value="1_3_lakh">1-3 Lakh</option>
                        <option value="3_5_lakh">3-5 Lakh</option>
                        <option value="5_10_lakh">5-10 Lakh</option>
                        <option value="10_20_lakh">10-20 Lakh</option>
                        <option value="20_plus_lakh">20+ Lakh</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="payment_preference" className="block text-sm font-medium text-gray-700">
                        Payment Preference <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="payment_preference"
                        name="payment_preference"
                        required
                        value={formData.payment_preference}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Preference</option>
                        <option value="full_payment">Full Payment</option>
                        <option value="installment">Installment</option>
                        <option value="lease">Lease</option>
                        <option value="ppa">PPA</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="lead_source" className="block text-sm font-medium text-gray-700">
                        Lead Source <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="lead_source"
                        name="lead_source"
                        required
                        value={formData.lead_source}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Source</option>
                        <option value="website">Website</option>
                        <option value="facebook">Facebook</option>
                        <option value="referral">Referral</option>
                        <option value="advertisement">Advertisement</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="decision_maker" className="block text-sm font-medium text-gray-700">
                        Decision Maker <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="decision_maker"
                        name="decision_maker"
                        required
                        value={formData.decision_maker}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select</option>
                        <option value="self">Self</option>
                        <option value="spouse">Spouse</option>
                        <option value="parent">Parent</option>
                        <option value="business_partner">Business Partner</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="decision_time" className="block text-sm font-medium text-gray-700">
                        Decision Time <span className="text-red-500">*</span>
                    </label>
                    <select
                        id="decision_time"
                        name="decision_time"
                        required
                        value={formData.decision_time}
                        onChange={handleInputChange}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                    >
                        <option value="">Select Timeframe</option>
                        <option value="immediate">Immediate</option>
                        <option value="1_month">Within 1 Month</option>
                        <option value="3_months">Within 3 Months</option>
                        <option value="6_months">Within 6 Months</option>
                        <option value="just_exploring">Just Exploring</option>
                    </select>
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
