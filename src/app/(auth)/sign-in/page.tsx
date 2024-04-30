'use client'
import React from 'react'
import { useForm } from'react-hook-form'
import * as z  from 'zod'
import Link from 'next/link'
import {useState} from 'react'
import {useDebounceValue} from 'usehooks-ts'
import { useToast } from '@/components/ui/use-toast'


const page = () => {
  const [username, setUsername] = useState('')
  const [usernameMethod, setUsernameMethod] = useState('')
  const [isCheckingUsername, setIsCheckingUsername] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const debouncedUsername = useDebounceValue(username, 300)
  const {toast} = useToast()
  return (
    <div>page</div>
  )
}

export default page