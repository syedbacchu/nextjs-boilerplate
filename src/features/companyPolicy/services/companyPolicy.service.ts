import { PolicyType, CompanyPolicyAPIResponse, CompanyPolicyResponse } from '../types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

export async function getCompanyPolicy(type: PolicyType): Promise<CompanyPolicyResponse> {
    try {
        const response = await fetch(`${API_BASE_URL}/company-policy?type=${type}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        })

        const result: CompanyPolicyAPIResponse = await response.json()
        console.log(`Company Policy API Response (${type}):`, result)

        if (!response.ok) {
            return { success: false, error: result.message || `Failed to fetch ${type}` }
        }

        if (result.success && result.data && result.data.content) {
            return {
                success: true,
                data: {
                    type: result.data.type,
                    content: result.data.content,
                }
            }
        }

        return { success: false, error: 'No data found or empty content' }
    } catch (error) {
        console.error(`Error fetching company policy (${type}):`, error)
        return { success: false, error: 'Network error. Please try again.' }
    }
}
