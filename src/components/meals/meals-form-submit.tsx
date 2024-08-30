"use client"
import React from 'react'
import { useFormStatus } from 'react-dom'

export default function MealsFormSubmit() {
  const {pending} = useFormStatus()
  return (
    <button>
      {pending ? "submitting..." : "share meal"}
    </button>
  )
}
