'use client'
import React from 'react'
import { useForm } from'react-hook-form'
import * as z  from 'zod'
import Link from 'next/link'
import {useState, useEffect} from 'react'
import {useDebounceValue} from 'usehooks-ts'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { signUpSchema } from '@/schemas/signUpSchema'
import axios, {AxiosError} from 'axios'
import { ApiResponse } from '@/types/ApiResponse'

const page = () => {
  const [username, setUsername] = useState('')
  const [usernameMessage, setUsernameMessage] = useState('')
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const debouncedUsername = useDebounceValue(username, 300)
  const {toast} = useToast()
  const router = useRouter

  const form = useForm({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  }) 

  useEffect(() => {
    const checksuername = async() => {
      if(debouncedUsername){
        setIsCheckingUsername(true)
        setUsernameMessage('')
        try{
          const response = await axios.get(`/api/check-username-unique?username=${debouncedUsername}`) 
          setUsernameMessage(response.data.message)
        } catch (error) {
          const axiosError = error as AxiosError<ApiResponse>
          setUsernameMessage(
            axiosError.response?.data.message ?? "Error checking username"
          )
        } finally {
          setIsCheckingUsername(false)
        }
      }      
    } 
  }, [debouncedUsername])
  

  return (
    <div>page</div>
  )
}

export default page

function zodResolver(signUpSchema: z.ZodObject<{ username: z.ZodString; email: z.ZodString; password: z.ZodString }, "strip", z.ZodTypeAny, { username: string; email: string; password: string }, { username: string; email: string; password: string }>): import("react-hook-form").Resolver<{ username: string; email: string; password: string }, any> | undefined {
  throw new Error('Function not implemented.')
}
