'use server'

import { getCompanyPolicy } from '../services/companyPolicy.service'
import { PolicyType, CompanyPolicyResponse } from '../types'

export async function getCompanyPolicyAction(type: PolicyType): Promise<CompanyPolicyResponse | null> {
    try {
        return await getCompanyPolicy(type)
    } catch (error) {
        console.error('Error in getCompanyPolicyAction:', error)
        return null
    }
}
