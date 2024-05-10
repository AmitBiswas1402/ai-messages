import { useToast } from '@/components/ui/use-toast'
import { verifySchema } from '@/schemas/verifySchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useParams, useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import axios, { AxiosError } from 'axios'
import { ApiResponse } from '@/types/ApiResponse'

const VerifyAccount = () => {
    const router = useRouter()
    const params = useParams<{username: string}>()
    const {toast} = useToast()

    const form = useForm<z.infer<typeof verifySchema>>({
      resolver: zodResolver(verifySchema),
      
    }
  );

  const onSubmit = async (data: z.infer<typeof verifySchema>) => {
    try{
      const response = await axios.post(`/api/verify-code`, {
        username: params.username,
        code: data.code
      })

      toast({
        title: "Success",
        description: "response.data.message"
      })
      router.replace('sign-in')

    } catch (error) {
      console.error("Error during sign-up:", error);

      const axiosError = error as AxiosError<ApiResponse>;

      toast({
        title: "Sign Up Failed",
        description: axiosError.response?.data.message,
        variant: "destructive",
      });

    }
  }
    
  return (
    <div>VerifyAccount</div>
  )
}

export default VerifyAccount