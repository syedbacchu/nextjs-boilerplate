export type PolicyType = 'privacy_policy' | 'terms_condition' | 'cookie_policy' | 'data_deletion'

export interface CompanyPolicyData {
    type: PolicyType
    content: string
}

export interface CompanyPolicyAPIResponse {
    success: boolean
    message: string
    data: CompanyPolicyData
    status: number
    error_message: string
}

export interface CompanyPolicyResponse {
    success: boolean
    data?: CompanyPolicyData
    message?: string
    error?: string
}
