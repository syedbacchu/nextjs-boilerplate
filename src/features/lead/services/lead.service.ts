import { CustomerLeadData, CompanyDetailsData, LeadDetailData, SubmitLeadResponse, LeadDetailResponse } from '../types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

export async function submitCustomerLead(data: CustomerLeadData): Promise<SubmitLeadResponse> {
    try {
        const response = await fetch(`${API_BASE_URL}/collect-leads/customer-information`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const result = await response.json()
        console.log('Submit API Response:', result)

        if (!response.ok) {
            return { success: false, error: result.message || 'Failed to submit customer lead' }
        }

        const leadId = result.data?.id || result.id
        console.log('Extracted Lead ID:', leadId)

        return {
            success: true,
            message: result.message || 'Customer lead submitted successfully',
            leadId: leadId
        }
    } catch (error) {
        console.error('Error submitting customer lead:', error)
        return { success: false, error: 'Network error. Please try again.' }
    }
}

export async function submitCompanyDetails(data: CompanyDetailsData): Promise<{ success: boolean; message?: string; error?: string }> {
    try {
        const response = await fetch(`${API_BASE_URL}/collect-leads/company-details`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        const result = await response.json()

        if (!response.ok) {
            return { success: false, error: result.message || 'Failed to submit company details' }
        }

        return { success: true, message: result.message || 'Company details submitted successfully' }
    } catch (error) {
        console.error('Error submitting company details:', error)
        return { success: false, error: 'Network error. Please try again.' }
    }
}

export async function getLeadDetail(id: string | number): Promise<LeadDetailResponse> {
    try {
        const url = `${API_BASE_URL}/collect-leads/detail?id=${id}`
        console.log('Fetching from:', url)
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const result = await response.json()
        console.log('API Response:', result)

        if (!response.ok) {
            console.error('API Error:', result)
            return { success: false, error: result.message || 'Failed to fetch lead details' }
        }

        console.log('Success, data:', result.data)
        return { success: true, data: result.data }
    } catch (error) {
        console.error('Error fetching lead details:', error)
        return { success: false, error: 'Network error. Please try again.' }
    }
}
