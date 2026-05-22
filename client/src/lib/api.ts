export interface ContactPayload {
  firstName: string
  lastName: string
  email: string
  message: string
  phone?: string
  serviceType?: string
}

export interface ContactSuccessResponse {
  success: true
  message: string
}

export interface ContactErrorResponse {
  success: false
  message?: string
  errors?: Record<string, string[] | undefined>
}

export const submitContact = async (
  payload: ContactPayload
): Promise<ContactSuccessResponse> => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = (await response.json()) as ContactSuccessResponse | ContactErrorResponse

  if (!response.ok || !data.success) {
    const error = data as ContactErrorResponse
    throw error
  }

  return data as ContactSuccessResponse
}
