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
        return `
<!DOCTYPE html>
<html>
<head>
    <title>Customer Lead Form - ${data.full_name}</title>
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
        <h1>Customer Lead Information</h1>
        <p><strong>Lead ID:</strong> #${data.id}</p>
        <p><strong>Submitted Date:</strong> ${new Date(data.created_at).toLocaleDateString()}</p>
    </div>

    <div class="section">
        <h2>Personal Information</h2>
        <div class="info-grid">
            <div class="info-item"><span class="label">Full Name:</span> <span class="value">${data.full_name}</span></div>
            <div class="info-item"><span class="label">Phone:</span> <span class="value">${data.phone}</span></div>
            ${data.whatsapp ? `<div class="info-item"><span class="label">WhatsApp:</span> <span class="value">${data.whatsapp}</span></div>` : ''}
            ${data.email ? `<div class="info-item"><span class="label">Email:</span> <span class="value">${data.email}</span></div>` : ''}
            ${data.nid ? `<div class="info-item"><span class="label">NID/Business ID:</span> <span class="value">${data.nid}</span></div>` : ''}
            <div class="info-item"><span class="label">Customer Type:</span> <span class="value">${data.customer_type || 'N/A'}</span></div>
        </div>
    </div>

    <div class="section">
        <h2>Address Information</h2>
        <div class="info-grid">
            <div class="info-item" style="grid-column: 1 / -1;"><span class="label">Address:</span> <span class="value">${data.address}</span></div>
            <div class="info-item"><span class="label">District:</span> <span class="value">${data.district}</span></div>
            ${data.google_map ? `<div class="info-item"><span class="label">Google Map:</span> <span class="value">${data.google_map}</span></div>` : ''}
        </div>
    </div>

    <div class="section">
        <h2>Installation Details</h2>
        <div class="info-grid">
            <div class="info-item"><span class="label">Site Type:</span> <span class="value">${data.installation_site_type || 'N/A'}${data.installation_site_type_other ? ` (${data.installation_site_type_other})` : ''}</span></div>
            <div class="info-item"><span class="label">Electricity Source:</span> <span class="value">${data.electricity_source || 'N/A'}</span></div>
            <div class="info-item"><span class="label">Meter Type:</span> <span class="value">${data.meter_type || 'N/A'}</span></div>
            <div class="info-item"><span class="label">Daytime Usage:</span> <span class="value">${data.daytime_usage || 'N/A'}</span></div>
            <div class="info-item"><span class="label">System Type:</span> <span class="value">${data.system_type || 'N/A'}</span></div>
            ${data.system_size_kw ? `<div class="info-item"><span class="label">System Size:</span> <span class="value">${data.system_size_kw} kW</span></div>` : ''}
            <div class="info-item"><span class="label">Main Purpose:</span> <span class="value">${data.main_purpose || 'N/A'}${data.main_purpose_other ? ` (${data.main_purpose_other})` : ''}</span></div>
            ${data.monthly_bill ? `<div class="info-item"><span class="label">Monthly Bill:</span> <span class="value">${data.monthly_bill} BDT</span></div>` : ''}
        </div>
    </div>

    <div class="section">
        <h2>Roof Details</h2>
        <div class="info-grid">
            <div class="info-item"><span class="label">Roof Size:</span> <span class="value">${data.roof_size || 'N/A'} sq. ft.</span></div>
            <div class="info-item"><span class="label">Roof Type:</span> <span class="value">${data.roof_type || 'N/A'}${data.roof_type_other ? ` (${data.roof_type_other})` : ''}</span></div>
            <div class="info-item"><span class="label">Installation Area:</span> <span class="value">${data.installation_area || 'N/A'}</span></div>
            <div class="info-item"><span class="label">Shadow Issue:</span> <span class="value">${data.has_shadow ? 'Yes' : 'No'}</span></div>
        </div>
    </div>

    <div class="section">
        <h2>Budget & Decision</h2>
        <div class="info-grid">
            <div class="info-item"><span class="label">Budget Range:</span> <span class="value">${data.budget_range || 'N/A'}</span></div>
            <div class="info-item"><span class="label">Payment Preference:</span> <span class="value">${data.payment_preference || 'N/A'}</span></div>
            <div class="info-item"><span class="label">Lead Source:</span> <span class="value">${data.lead_source || 'N/A'}${data.lead_source_other ? ` (${data.lead_source_other})` : ''}</span></div>
            <div class="info-item"><span class="label">Decision Maker:</span> <span class="value">${data.decision_maker || 'N/A'}</span></div>
            <div class="info-item"><span class="label">Decision Time:</span> <span class="value">${data.decision_time || 'N/A'}</span></div>
        </div>
    </div>

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
                <div className="mb-8 rounded-lg bg-white p-8 text-center shadow-lg">
                    <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                        <FaCheck className="text-4xl text-green-600" />
                    </div>
                    <h1 className="mb-4 text-3xl font-bold text-gray-900">Thank You!</h1>
                    <p className="mb-8 text-lg text-gray-600">
                        Your form has been submitted successfully. Our team will contact you shortly.
                    </p>

                    {loading ? (
                        <div className="rounded-lg bg-gray-50 p-4">
                            <p className="text-gray-600">Loading your form details...</p>
                            <p className="mt-2 text-sm text-gray-500">Lead ID: {leadId}</p>
                        </div>
                    ) : leadData ? (
                        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                            <button
                                onClick={handleDownload}
                                className="flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
                            >
                                <FaDownload />
                                Download Submitted Form
                            </button>
                            <button
                                onClick={() => router.push('/')}
                                className="flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
                            >
                                <FaHome />
                                Back to Home
                            </button>
                        </div>
                    ) : (
                        <div className="rounded-lg bg-red-50 p-4">
                            <p className="text-red-600">Failed to load form details</p>
                            <p className="mt-2 text-sm text-gray-500">Lead ID: {leadId}</p>
                            <button
                                onClick={() => router.push('/')}
                                className="mt-4 flex items-center justify-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700"
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
                                <div>
                                    <p className="text-sm text-gray-600">Customer Type</p>
                                    <p className="font-medium text-gray-900">{leadData.customer_type || 'N/A'}</p>
                                </div>
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
                                <div>
                                    <p className="text-sm text-gray-600">Lead Source</p>
                                    <p className="font-medium text-gray-900">
                                        {leadData.lead_source || 'N/A'}
                                        {leadData.lead_source_other && ` (${leadData.lead_source_other})`}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Decision Maker</p>
                                    <p className="font-medium text-gray-900">{leadData.decision_maker || 'N/A'}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600">Decision Time</p>
                                    <p className="font-medium text-gray-900">{leadData.decision_time || 'N/A'}</p>
                                </div>
                            </div>
                        </div>

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
