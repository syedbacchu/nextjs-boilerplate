'use server'

import { submitCustomerLead, getLeadDetail } from '../services/lead.service'
import { CustomerLeadData, LeadDetailData, SubmitLeadResponse, LeadDetailResponse } from '../types'

export async function submitCustomerLeadAction(data: CustomerLeadData): Promise<SubmitLeadResponse> {
  try {
    return await submitCustomerLead(data)
  } catch (error) {
    console.error('Error in submitCustomerLeadAction:', error)
    return { success: false, error: 'An error occurred while submitting the form' }
  }
}

export async function getLeadDetailAction(id: string | number): Promise<LeadDetailResponse> {
  try {
    return await getLeadDetail(id)
  } catch (error) {
    console.error('Error in getLeadDetailAction:', error)
    return { success: false, error: 'An error occurred while fetching lead details' }
  }
}
