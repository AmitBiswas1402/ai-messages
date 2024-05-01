'use client'
import React from 'react'
import { useForm } from'react-hook-form'
import * as z  from 'zod'
import Link from 'next/link'
import {useState} from 'react'
import {useDebounceValue} from 'usehooks-ts'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { signUpSchema } from '@/schemas/signUpSchema'


const page = () => {
  const [username, setUsername] = useState('')
  const [usernameMethod, setUsernameMethod] = useState('')
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const debouncedUsername = useDebounceValue(username, 300)
  const {toast} = useToast()
  const router = useRouter

  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  }) 

  return (
    <div>page</div>
  )
}

export default page

function zodResolver(signUpSchema: z.ZodObject<{ username: z.ZodString; email: z.ZodString; password: z.ZodString }, "strip", z.ZodTypeAny, { username: string; email: string; password: string }, { username: string; email: string; password: string }>): import("react-hook-form").Resolver<import("react-hook-form").FieldValues, any> | undefined {
  throw new Error('Function not implemented.')
}