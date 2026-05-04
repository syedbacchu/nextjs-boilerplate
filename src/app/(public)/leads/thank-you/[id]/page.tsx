'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { FaCheck, FaDownload, FaHome } from 'react-icons/fa'
import { getLeadDetail, LeadDetailData } from '@/features/lead'
import { toast } from 'sonner'

export default function ThankYouPage() {
    const params = useParams()
    const router = useRouter()
    const leadId = params.id as string
    const [leadData, setLeadData] = useState<LeadDetailData | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (leadId) {
            fetchLeadDetails()
        }
    }, [leadId])

    const fetchLeadDetails = async () => {
        if (!leadId) return

        setLoading(true)
        try {
            console.log('Fetching lead details for ID:', leadId)
            const result = await getLeadDetail(leadId)
            console.log('API response:', result)

            if (result.success && result.data) {
                console.log('Setting lead data:', result.data)
                setLeadData(result.data)
                toast.success('Form details loaded successfully')
            } else {
                console.error('API returned error:', result.error)
                toast.error(result.error || 'Failed to load lead details')
            }
        } catch (error) {
            console.error('Error fetching lead details:', error)
            toast.error('An error occurred while fetching details')
        } finally {
            setLoading(false)
        }
    }

    const handleDownload = () => {
        if (!leadData) return

        // Create a printable version
        const printContent = generatePrintContent(leadData)
        const printWindow = window.open('', '_blank')
        if (printWindow) {
            printWindow.document.write(printContent)
            printWindow.document.close()
            printWindow.print()
        }
    }

    const generatePrintContent = (data: LeadDetailData): string => {
        const isCompanyLead = data.company_name ? true : false

        return `
<!DOCTYPE html>
<html>
<head>
    <title>${isCompanyLead ? 'Company Lead Form' : 'Customer Lead Form'} - ${data.full_name}</title>
    <style>
        body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
        h1 { color: #333; border-bottom: 2px solid #333; padding-bottom: 10px; }
        h2 { color: #555; margin-top: 20px; font-size: 18px; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin: 10px 0; }
        .info-item { margin: 5px 0; }
        .label { font-weight: bold; color: #666; }
        .value { color: #333; }
        .section { margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 5px; }
        .header { text-align: center; margin-bottom: 30px; }
        .footer { margin-top: 30px; text-align: center; color: #777; font-size: 12px; }
        @media print { body { print-color-adjust: exact; -webkit-print-color-adjust: exact; } }
    </style>
</head>
<body>
    <div class="header">
        <h1>${isCompanyLead ? 'Company Lead Information' : 'Customer Lead Information'}</h1>
        <p><strong>Lead ID:</strong> #${data.id}</p>
        <p><strong>Lead Type:</strong> ${data.type_label}</p>
        <p><strong>Submitted Date:</strong> ${new Date(data.created_at).toLocaleDateString()}</p>
    </div>

    <div class="section">
        <h2>Personal Information</h2>
        <div class="info-grid">
            ${isCompanyLead ? `<div class="info-item"><span class="label">Company Name:</span> <span class="value">${data.company_name}</span></div>` : ''}
            <div class="info-item"><span class="label">Full Name:</span> <span class="value">${data.full_name}</span></div>
            <div class="info-item"><span class="label">Phone:</span> <span class="value">${data.phone}</span></div>
            ${data.whatsapp ? `<div class="info-item"><span class="label">WhatsApp:</span> <span class="value">${data.whatsapp}</span></div>` : ''}
            ${data.email ? `<div class="info-item"><span class="label">Email:</span> <span class="value">${data.email}</span></div>` : ''}
            ${data.nid ? `<div class="info-item"><span class="label">NID/Business ID:</span> <span class="value">${data.nid}</span></div>` : ''}
            ${data.customer_type ? `<div class="info-item"><span class="label">Customer Type:</span> <span class="value">${data.customer_type}</span></div>` : ''}
        </div>
    </div>

    <div class="section">
        <h2>Address Information</h2>
        <div class="info-grid">
            <div class="info-item" style="grid-column: 1 / -1;"><span class="label">Address:</span> <span class="value">${data.address}</span></div>
            ${data.district ? `<div class="info-item"><span class="label">District:</span> <span class="value">${data.district}</span></div>` : ''}
            ${data.google_map ? `<div class="info-item"><span class="label">Google Map:</span> <span class="value">${data.google_map}</span></div>` : ''}
        </div>
    </div>

    ${isCompanyLead ? `
    <div class="section">
        <h2>Working & Electrical Parameters</h2>
        <div class="info-grid">
            ${data.grid_connection ? `<div class="info-item"><span class="label">Grid Connection:</span> <span class="value">${data.grid_connection}</span></div>` : ''}
            ${data.working_shift ? `<div class="info-item"><span class="label">Working Shift:</span> <span class="value">${data.working_shift}</span></div>` : ''}
            ${data.peak_load_time ? `<div class="info-item"><span class="label">Peak Load Time:</span> <span class="value">${data.peak_load_time}</span></div>` : ''}
            ${data.transformer_capacity ? `<div class="info-item"><span class="label">Transformer Capacity:</span> <span class="value">${data.transformer_capacity} KVA</span></div>` : ''}
            ${data.contract_demand ? `<div class="info-item"><span class="label">Contract Demand:</span> <span class="value">${data.contract_demand} kW</span></div>` : ''}
            ${data.monthly_consumption ? `<div class="info-item"><span class="label">Monthly Consumption:</span> <span class="value">${data.monthly_consumption} kWh</span></div>` : ''}
            ${data.total_connected_load ? `<div class="info-item"><span class="label">Total Connected Load:</span> <span class="value">${data.total_connected_load} kW</span></div>` : ''}
            ${data.total_motor_load ? `<div class="info-item"><span class="label">Total Motor Load:</span> <span class="value">${data.total_motor_load} kW</span></div>` : ''}
            ${data.daytime_load_percentage ? `<div class="info-item"><span class="label">Daytime Load %:</span> <span class="value">${data.daytime_load_percentage}%</span></div>` : ''}
            ${data.demand_factor ? `<div class="info-item"><span class="label">Demand Factor:</span> <span class="value">${data.demand_factor}</span></div>` : ''}
            ${data.diversity_factor ? `<div class="info-item"><span class="label">Diversity Factor:</span> <span class="value">${data.diversity_factor}</span></div>` : ''}
            ${data.maximum_demand ? `<div class="info-item"><span class="label">Maximum Demand:</span> <span class="value">${data.maximum_demand} kW</span></div>` : ''}
            ${data.daily_consumption ? `<div class="info-item"><span class="label">Daily Consumption:</span> <span class="value">${data.daily_consumption} kWh</span></div>` : ''}
        </div>
    </div>

    <div class="section">
        <h2>System Requirements</h2>
        <div class="info-grid">
            ${data.solar_target_percent ? `<div class="info-item"><span class="label">Solar Target %:</span> <span class="value">${data.solar_target_percent}%</span></div>` : ''}
            ${data.required_capacity_kw ? `<div class="info-item"><span class="label">Required Capacity:</span> <span class="value">${data.required_capacity_kw} kW</span></div>` : ''}
            ${data.system_size_kw ? `<div class="info-item"><span class="label">System Size:</span> <span class="value">${data.system_size_kw} kW</span></div>` : ''}
            ${data.inverter_size ? `<div class="info-item"><span class="label">Inverter Size:</span> <span class="value">${data.inverter_size} kW</span></div>` : ''}
            ${data.panel_size ? `<div class="info-item"><span class="label">Panel Size:</span> <span class="value">${data.panel_size} Wp</span></div>` : ''}
            ${data.panel_quantity ? `<div class="info-item"><span class="label">Panel Quantity:</span> <span class="value">${data.panel_quantity}</span></div>` : ''}
            ${data.backup_hours ? `<div class="info-item"><span class="label">Backup Hours:</span> <span class="value">${data.backup_hours}</span></div>` : ''}
            ${data.critical_load ? `<div class="info-item"><span class="label">Critical Load:</span> <span class="value">${data.critical_load} kW</span></div>` : ''}
        </div>
    </div>

    ${data.machinery_load_details && data.machinery_load_details.length > 0 ? `
    <div class="section">
        <h2>Machinery Load Details</h2>
        ${data.machinery_load_details.map(m => `
            <div style="margin: 10px 0; padding: 10px; background: #fff; border: 1px solid #ddd;">
                <p><strong>${m.machine_name}</strong></p>
                <div class="info-grid">
                    <div class="info-item"><span class="label">Quantity:</span> <span class="value">${m.qty}</span></div>
                    <div class="info-item"><span class="label">Rated Power:</span> <span class="value">${m.rated_power_kw} kW</span></div>
                    <div class="info-item"><span class="label">Running Hours/Day:</span> <span class="value">${m.running_hours_per_day}</span></div>
                    <div class="info-item"><span class="label">Total kW:</span> <span class="value">${m.total_kw} kW</span></div>
                </div>
            </div>
        `).join('')}
    </div>
    ` : ''}

    ${data.motor_load_details && data.motor_load_details.length > 0 ? `
    <div class="section">
        <h2>Motor Load Details</h2>
        ${data.motor_load_details.map(m => `
            <div style="margin: 10px 0; padding: 10px; background: #fff; border: 1px solid #ddd;">
                <p><strong>${m.motor_type}</strong></p>
                <div class="info-grid">
                    <div class="info-item"><span class="label">Quantity:</span> <span class="value">${m.qty}</span></div>
                    <div class="info-item"><span class="label">HP:</span> <span class="value">${m.hp}</span></div>
                    <div class="info-item"><span class="label">kW:</span> <span class="value">${m.kw} kW</span></div>
                    <div class="info-item"><span class="label">Starting Type:</span> <span class="value">${m.starting_type}</span></div>
                </div>
            </div>
        `).join('')}
    </div>
    ` : ''}

    ${data.estimated_project_cost ? `
    <div class="section">
        <h2>Cost Analysis</h2>
        <div class="info-grid">
            <div class="info-item"><span class="label">Estimated Project Cost:</span> <span class="value">${data.estimated_project_cost} BDT</span></div>
            ${data.expected_payback_period ? `<div class="info-item"><span class="label">Expected Payback Period:</span> <span class="value">${data.expected_payback_period} Years</span></div>` : ''}
        </div>
    </div>
    ` : ''}
    ` : `
    <div class="section">
        <h2>Installation Details</h2>
        <div class="info-grid">
            ${data.installation_site_type ? `<div class="info-item"><span class="label">Site Type:</span> <span class="value">${data.installation_site_type}${data.installation_site_type_other ? ` (${data.installation_site_type_other})` : ''}</span></div>` : ''}
            ${data.electricity_source ? `<div class="info-item"><span class="label">Electricity Source:</span> <span class="value">${data.electricity_source}</span></div>` : ''}
            ${data.meter_type ? `<div class="info-item"><span class="label">Meter Type:</span> <span class="value">${data.meter_type}</span></div>` : ''}
            ${data.daytime_usage ? `<div class="info-item"><span class="label">Daytime Usage:</span> <span class="value">${data.daytime_usage}</span></div>` : ''}
            ${data.system_type ? `<div class="info-item"><span class="label">System Type:</span> <span class="value">${data.system_type}</span></div>` : ''}
            ${data.system_size_kw ? `<div class="info-item"><span class="label">System Size:</span> <span class="value">${data.system_size_kw} kW</span></div>` : ''}
            ${data.main_purpose ? `<div class="info-item"><span class="label">Main Purpose:</span> <span class="value">${data.main_purpose}${data.main_purpose_other ? ` (${data.main_purpose_other})` : ''}</span></div>` : ''}
            ${data.monthly_bill ? `<div class="info-item"><span class="label">Monthly Bill:</span> <span class="value">${data.monthly_bill} BDT</span></div>` : ''}
        </div>
    </div>
    `}

    <div class="section">
        <h2>Roof Details</h2>
        <div class="info-grid">
            <div class="info-item"><span class="label">Roof Size:</span> <span class="value">${data.roof_size || 'N/A'} sq. ft.</span></div>
            <div class="info-item"><span class="label">Roof Type:</span> <span class="value">${data.roof_type || 'N/A'}${data.roof_type_other ? ` (${data.roof_type_other})` : ''}</span></div>
            ${data.installation_area ? `<div class="info-item"><span class="label">Installation Area:</span> <span class="value">${data.installation_area}</span></div>` : ''}
            <div class="info-item"><span class="label">Shadow Issue:</span> <span class="value">${data.has_shadow ? 'Yes' : 'No'}</span></div>
        </div>
    </div>

    ${data.budget_range || data.payment_preference ? `
    <div class="section">
        <h2>Budget & Decision</h2>
        <div class="info-grid">
            ${data.budget_range ? `<div class="info-item"><span class="label">Budget Range:</span> <span class="value">${data.budget_range}</span></div>` : ''}
            ${data.payment_preference ? `<div class="info-item"><span class="label">Payment Preference:</span> <span class="value">${data.payment_preference}</span></div>` : ''}
            ${data.lead_source ? `<div class="info-item"><span class="label">Lead Source:</span> <span class="value">${data.lead_source}${data.lead_source_other ? ` (${data.lead_source_other})` : ''}</span></div>` : ''}
            ${data.decision_maker ? `<div class="info-item"><span class="label">Decision Maker:</span> <span class="value">${data.decision_maker}</span></div>` : ''}
            ${data.decision_time ? `<div class="info-item"><span class="label">Decision Time:</span> <span class="value">${data.decision_time}</span></div>` : ''}
        </div>
    </div>
    ` : ''}

    ${data.customer_signature || data.declaration_date ? `
    <div class="section">
        <h2>Declaration</h2>
        <div class="info-grid">
            ${data.customer_signature ? `<div class="info-item"><span class="label">Signature:</span> <span class="value">${data.customer_signature}</span></div>` : ''}
            ${data.declaration_date ? `<div class="info-item"><span class="label">Date:</span> <span class="value">${new Date(data.declaration_date).toLocaleDateString()}</span></div>` : ''}
        </div>
    </div>
    ` : ''}

    <div class="footer">
        <p>This document was generated on ${new Date().toLocaleString()}</p>
        <p>Status: <strong>${data.status.toUpperCase()}</strong></p>
    </div>
</body>
</html>
        `
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-12">
            <div className="mx-auto max-w-4xl">
                {/* Thank You Card */}
                <div className="mb-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 p-12 text-center shadow-2xl border-2 border-green-200 relative overflow-hidden">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500"></div>
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-200 rounded-full opacity-20"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-200 rounded-full opacity-20"></div>

                    {/* Success Icon */}
                    <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-green-400 to-emerald-500 shadow-xl ring-8 ring-green-100">
                        <FaCheck className="text-5xl text-white" />
                    </div>

                    {/* Main Message */}
                    <div className="relative">
                        <h1 className="mb-4 text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                            Thank You!
                        </h1>
                        <div className="mx-auto mb-6 h-1 w-32 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                        <p className="mb-4 text-xl text-gray-700 font-medium">
                            Your form has been submitted successfully
                        </p>
                        <p className="text-lg text-gray-600">
                            Our team will contact you shortly
                        </p>
                    </div>

                    {/* Loading State */}
                    {loading ? (
                        <div className="mt-8 rounded-xl bg-white p-6 shadow-md">
                            <div className="flex items-center justify-center gap-3">
                                <div className="h-6 w-6 animate-spin rounded-full border-4 border-green-500 border-t-transparent"></div>
                                <p className="text-gray-700 font-medium">Loading your form details...</p>
                            </div>
                            <p className="mt-2 text-sm text-gray-500">Lead ID: {leadId}</p>
                        </div>
                    ) : leadData ? (
                        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <button
                                onClick={handleDownload}
                                className="group relative flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:from-green-600 hover:to-emerald-700 hover:scale-105 hover:shadow-xl"
                            >
                                <FaDownload className="text-xl transition-transform group-hover:scale-110" />
                                <span>Download Submitted Form</span>
                            </button>
                            <button
                                onClick={() => router.push('/')}
                                className="group flex items-center justify-center gap-3 rounded-xl border-2 border-gray-300 bg-white px-8 py-4 text-lg font-bold text-gray-700 shadow-md transition-all hover:bg-gray-50 hover:border-gray-400 hover:scale-105"
                            >
                                <FaHome className="text-xl transition-transform group-hover:scale-110" />
                                <span>Back to Home</span>
                            </button>
                        </div>
                    ) : (
                        <div className="mt-8 rounded-xl bg-red-50 p-6 shadow-md border-2 border-red-200">
                            <p className="text-red-600 font-bold">Failed to load form details</p>
                            <p className="mt-2 text-sm text-gray-500">Lead ID: {leadId}</p>
                            <button
                                onClick={() => router.push('/')}
                                className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                            >
                                <FaHome />
                                Back to Home
                            </button>
                        </div>
                    )}
                </div>

                {/* Lead Details */}
                {leadData && (
                    <div className="rounded-lg bg-white p-8 shadow-lg">
                        <div className="mb-6 flex items-center justify-between border-b pb-4">
                            <h2 className="text-2xl font-bold text-gray-900">Submitted Form Details</h2>
                            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800">
                                Lead ID: #{leadData.id}
                            </span>
                        </div>

                        {/* Personal Information */}
                        <div className="mb-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-800">Personal Information</h3>
                            <div className="grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
                                {leadData.company_name && (
                                    <div>
                                        <p className="text-sm text-gray-600">Company Name</p>
                                        <p className="font-medium text-gray-900">{leadData.company_name}</p>
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm text-gray-600">Full Name</p>
                                    <p className="font-medium text-gray-900">{leadData.full_name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Phone</p>
                                    <p className="font-medium text-gray-900">{leadData.phone}</p>
                                </div>
                                {leadData.whatsapp && (
                                    <div>
                                        <p className="text-sm text-gray-600">WhatsApp</p>
                                        <p className="font-medium text-gray-900">{leadData.whatsapp}</p>
                                    </div>
                                )}
                                {leadData.email && (
                                    <div>
                                        <p className="text-sm text-gray-600">Email</p>
                                        <p className="font-medium text-gray-900">{leadData.email}</p>
                                    </div>
                                )}
                                {leadData.nid && (
                                    <div>
                                        <p className="text-sm text-gray-600">NID/Business ID</p>
                                        <p className="font-medium text-gray-900">{leadData.nid}</p>
                                    </div>
                                )}
                                {leadData.customer_type && (
                                    <div>
                                        <p className="text-sm text-gray-600">Customer Type</p>
                                        <p className="font-medium text-gray-900">{leadData.customer_type}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Address Information */}
                        <div className="mb-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-800">Address Information</h3>
                            <div className="grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
                                <div className="md:col-span-2">
                                    <p className="text-sm text-gray-600">Address</p>
                                    <p className="font-medium text-gray-900">{leadData.address}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">District</p>
                                    <p className="font-medium text-gray-900">{leadData.district}</p>
                                </div>
                                {leadData.google_map && (
                                    <div>
                                        <p className="text-sm text-gray-600">Google Map Link</p>
                                        <p className="font-medium text-gray-900 break-all">{leadData.google_map}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Installation Details */}
                        <div className="mb-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-800">Installation Details</h3>
                            <div className="grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
                                <div>
                                    <p className="text-sm text-gray-600">Site Type</p>
                                    <p className="font-medium text-gray-900">
                                        {leadData.installation_site_type || 'N/A'}
                                        {leadData.installation_site_type_other && ` (${leadData.installation_site_type_other})`}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Electricity Source</p>
                                    <p className="font-medium text-gray-900">{leadData.electricity_source || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Meter Type</p>
                                    <p className="font-medium text-gray-900">{leadData.meter_type || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Daytime Usage</p>
                                    <p className="font-medium text-gray-900">{leadData.daytime_usage || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">System Type</p>
                                    <p className="font-medium text-gray-900">{leadData.system_type || 'N/A'}</p>
                                </div>
                                {leadData.system_size_kw && (
                                    <div>
                                        <p className="text-sm text-gray-600">System Size</p>
                                        <p className="font-medium text-gray-900">{leadData.system_size_kw} kW</p>
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm text-gray-600">Main Purpose</p>
                                    <p className="font-medium text-gray-900">
                                        {leadData.main_purpose || 'N/A'}
                                        {leadData.main_purpose_other && ` (${leadData.main_purpose_other})`}
                                    </p>
                                </div>
                                {leadData.monthly_bill && (
                                    <div>
                                        <p className="text-sm text-gray-600">Monthly Bill</p>
                                        <p className="font-medium text-gray-900">{leadData.monthly_bill} BDT</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Roof Details */}
                        <div className="mb-6">
                            <h3 className="mb-3 text-lg font-semibold text-gray-800">Roof Details</h3>
                            <div className="grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
                                <div>
                                    <p className="text-sm text-gray-600">Roof Size</p>
                                    <p className="font-medium text-gray-900">{leadData.roof_size || 'N/A'} sq. ft.</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Roof Type</p>
                                    <p className="font-medium text-gray-900">
                                        {leadData.roof_type || 'N/A'}
                                        {leadData.roof_type_other && ` (${leadData.roof_type_other})`}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Installation Area</p>
                                    <p className="font-medium text-gray-900">{leadData.installation_area || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Shadow Issue</p>
                                    <p className="font-medium text-gray-900">{leadData.has_shadow ? 'Yes' : 'No'}</p>
                                </div>
                            </div>
                        </div>

                        {/* Budget & Decision */}
                        {leadData.budget_range && (
                            <div className="mb-6">
                                <h3 className="mb-3 text-lg font-semibold text-gray-800">Budget & Decision</h3>
                                <div className="grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
                                    <div>
                                        <p className="text-sm text-gray-600">Budget Range</p>
                                        <p className="font-medium text-gray-900">{leadData.budget_range || 'N/A'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-600">Payment Preference</p>
                                        <p className="font-medium text-gray-900">{leadData.payment_preference || 'N/A'}</p>
                                    </div>
                                    {leadData.lead_source && (
                                        <div>
                                            <p className="text-sm text-gray-600">Lead Source</p>
                                            <p className="font-medium text-gray-900">
                                                {leadData.lead_source || 'N/A'}
                                                {leadData.lead_source_other && ` (${leadData.lead_source_other})`}
                                            </p>
                                        </div>
                                    )}
                                    {leadData.decision_maker && (
                                        <div>
                                            <p className="text-sm text-gray-600">Decision Maker</p>
                                            <p className="font-medium text-gray-900">{leadData.decision_maker || 'N/A'}</p>
                                        </div>
                                    )}
                                    {leadData.decision_time && (
                                        <div>
                                            <p className="text-sm text-gray-600">Decision Time</p>
                                            <p className="font-medium text-gray-900">{leadData.decision_time || 'N/A'}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Company Specific Details */}
                        {leadData.company_name && (
                            <>
                                <div className="mb-6">
                                    <h3 className="mb-3 text-lg font-semibold text-gray-800">Working & Electrical Parameters</h3>
                                    <div className="grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
                                        {leadData.grid_connection && (
                                            <div>
                                                <p className="text-sm text-gray-600">Grid Connection</p>
                                                <p className="font-medium text-gray-900">{leadData.grid_connection}</p>
                                            </div>
                                        )}
                                        {leadData.working_shift && (
                                            <div>
                                                <p className="text-sm text-gray-600">Working Shift</p>
                                                <p className="font-medium text-gray-900">{leadData.working_shift}</p>
                                            </div>
                                        )}
                                        {leadData.peak_load_time && (
                                            <div>
                                                <p className="text-sm text-gray-600">Peak Load Time</p>
                                                <p className="font-medium text-gray-900">{leadData.peak_load_time}</p>
                                            </div>
                                        )}
                                        {leadData.transformer_capacity && (
                                            <div>
                                                <p className="text-sm text-gray-600">Transformer Capacity</p>
                                                <p className="font-medium text-gray-900">{leadData.transformer_capacity} KVA</p>
                                            </div>
                                        )}
                                        {leadData.contract_demand && (
                                            <div>
                                                <p className="text-sm text-gray-600">Contract Demand</p>
                                                <p className="font-medium text-gray-900">{leadData.contract_demand} kW</p>
                                            </div>
                                        )}
                                        {leadData.monthly_consumption && (
                                            <div>
                                                <p className="text-sm text-gray-600">Monthly Consumption</p>
                                                <p className="font-medium text-gray-900">{leadData.monthly_consumption} kWh</p>
                                            </div>
                                        )}
                                        {leadData.total_connected_load && (
                                            <div>
                                                <p className="text-sm text-gray-600">Total Connected Load</p>
                                                <p className="font-medium text-gray-900">{leadData.total_connected_load} kW</p>
                                            </div>
                                        )}
                                        {leadData.total_motor_load && (
                                            <div>
                                                <p className="text-sm text-gray-600">Total Motor Load</p>
                                                <p className="font-medium text-gray-900">{leadData.total_motor_load} kW</p>
                                            </div>
                                        )}
                                        {leadData.daytime_load_percentage && (
                                            <div>
                                                <p className="text-sm text-gray-600">Daytime Load Percentage</p>
                                                <p className="font-medium text-gray-900">{leadData.daytime_load_percentage}%</p>
                                            </div>
                                        )}
                                        {leadData.demand_factor && (
                                            <div>
                                                <p className="text-sm text-gray-600">Demand Factor</p>
                                                <p className="font-medium text-gray-900">{leadData.demand_factor}</p>
                                            </div>
                                        )}
                                        {leadData.diversity_factor && (
                                            <div>
                                                <p className="text-sm text-gray-600">Diversity Factor</p>
                                                <p className="font-medium text-gray-900">{leadData.diversity_factor}</p>
                                            </div>
                                        )}
                                        {leadData.maximum_demand && (
                                            <div>
                                                <p className="text-sm text-gray-600">Maximum Demand</p>
                                                <p className="font-medium text-gray-900">{leadData.maximum_demand} kW</p>
                                            </div>
                                        )}
                                        {leadData.daily_consumption && (
                                            <div>
                                                <p className="text-sm text-gray-600">Daily Consumption</p>
                                                <p className="font-medium text-gray-900">{leadData.daily_consumption} kWh</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h3 className="mb-3 text-lg font-semibold text-gray-800">System Requirements</h3>
                                    <div className="grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
                                        {leadData.solar_target_percent && (
                                            <div>
                                                <p className="text-sm text-gray-600">Solar Target Percentage</p>
                                                <p className="font-medium text-gray-900">{leadData.solar_target_percent}%</p>
                                            </div>
                                        )}
                                        {leadData.required_capacity_kw && (
                                            <div>
                                                <p className="text-sm text-gray-600">Required Capacity</p>
                                                <p className="font-medium text-gray-900">{leadData.required_capacity_kw} kW</p>
                                            </div>
                                        )}
                                        {leadData.system_size_kw && (
                                            <div>
                                                <p className="text-sm text-gray-600">System Size</p>
                                                <p className="font-medium text-gray-900">{leadData.system_size_kw} kW</p>
                                            </div>
                                        )}
                                        {leadData.inverter_size && (
                                            <div>
                                                <p className="text-sm text-gray-600">Inverter Size</p>
                                                <p className="font-medium text-gray-900">{leadData.inverter_size} kW</p>
                                            </div>
                                        )}
                                        {leadData.panel_size && (
                                            <div>
                                                <p className="text-sm text-gray-600">Panel Size</p>
                                                <p className="font-medium text-gray-900">{leadData.panel_size} Wp</p>
                                            </div>
                                        )}
                                        {leadData.panel_quantity && (
                                            <div>
                                                <p className="text-sm text-gray-600">Panel Quantity</p>
                                                <p className="font-medium text-gray-900">{leadData.panel_quantity}</p>
                                            </div>
                                        )}
                                        {leadData.backup_hours && (
                                            <div>
                                                <p className="text-sm text-gray-600">Backup Hours</p>
                                                <p className="font-medium text-gray-900">{leadData.backup_hours}</p>
                                            </div>
                                        )}
                                        {leadData.critical_load && (
                                            <div>
                                                <p className="text-sm text-gray-600">Critical Load</p>
                                                <p className="font-medium text-gray-900">{leadData.critical_load} kW</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Machinery Load Details */}
                                {leadData.machinery_load_details && leadData.machinery_load_details.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className="mb-3 text-lg font-semibold text-gray-800">Machinery Load Details</h3>
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            {leadData.machinery_load_details.map((machinery, index) => (
                                                <div key={index} className="mb-3 last:mb-0">
                                                    <p className="font-medium text-gray-900">{machinery.machine_name}</p>
                                                    <div className="mt-2 grid gap-2 text-sm md:grid-cols-5">
                                                        <div>
                                                            <p className="text-gray-600">Quantity</p>
                                                            <p className="font-medium">{machinery.qty}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-600">Rated Power</p>
                                                            <p className="font-medium">{machinery.rated_power_kw} kW</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-600">Running Hours/Day</p>
                                                            <p className="font-medium">{machinery.running_hours_per_day}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-600">Total kW</p>
                                                            <p className="font-medium">{machinery.total_kw} kW</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Motor Load Details */}
                                {leadData.motor_load_details && leadData.motor_load_details.length > 0 && (
                                    <div className="mb-6">
                                        <h3 className="mb-3 text-lg font-semibold text-gray-800">Motor Load Details</h3>
                                        <div className="rounded-lg bg-gray-50 p-4">
                                            {leadData.motor_load_details.map((motor, index) => (
                                                <div key={index} className="mb-3 last:mb-0">
                                                    <p className="font-medium text-gray-900">{motor.motor_type}</p>
                                                    <div className="mt-2 grid gap-2 text-sm md:grid-cols-5">
                                                        <div>
                                                            <p className="text-gray-600">Quantity</p>
                                                            <p className="font-medium">{motor.qty}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-600">HP</p>
                                                            <p className="font-medium">{motor.hp}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-600">kW</p>
                                                            <p className="font-medium">{motor.kw} kW</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-gray-600">Starting Type</p>
                                                            <p className="font-medium">{motor.starting_type}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {leadData.estimated_project_cost && (
                                    <div className="mb-6">
                                        <h3 className="mb-3 text-lg font-semibold text-gray-800">Cost Analysis</h3>
                                        <div className="grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
                                            <div>
                                                <p className="text-sm text-gray-600">Estimated Project Cost</p>
                                                <p className="font-medium text-gray-900">{leadData.estimated_project_cost} BDT</p>
                                            </div>
                                            {leadData.expected_payback_period && (
                                                <div>
                                                    <p className="text-sm text-gray-600">Expected Payback Period</p>
                                                    <p className="font-medium text-gray-900">{leadData.expected_payback_period} Years</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </>
                        )}

                        {/* Declaration */}
                        {(leadData.customer_signature || leadData.declaration_date) && (
                            <div className="mb-6">
                                <h3 className="mb-3 text-lg font-semibold text-gray-800">Declaration</h3>
                                <div className="grid gap-4 rounded-lg bg-gray-50 p-4 md:grid-cols-2">
                                    {leadData.customer_signature && (
                                        <div>
                                            <p className="text-sm text-gray-600">Customer Signature</p>
                                            <p className="font-medium text-gray-900">{leadData.customer_signature}</p>
                                        </div>
                                    )}
                                    {leadData.declaration_date && (
                                        <div>
                                            <p className="text-sm text-gray-600">Declaration Date</p>
                                            <p className="font-medium text-gray-900">
                                                {new Date(leadData.declaration_date).toLocaleDateString()}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Footer Info */}
                        <div className="mt-6 rounded-lg bg-blue-50 p-4 text-center">
                            <p className="text-sm text-gray-600">
                                Submitted on: <strong>{new Date(leadData.created_at).toLocaleString()}</strong>
                            </p>
                            <p className="mt-1 text-sm text-gray-600">
                                Status: <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800">
                                    {leadData.status.toUpperCase()}
                                </span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
