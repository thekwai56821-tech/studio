'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/hooks/use-toast'
import { generateStyleVariations } from './actions'
import { Skeleton } from '@/components/ui/skeleton'

const formSchema = z.object({
  componentType: z.string().min(1, 'Please select a component type.'),
  baseStyle: z.string().min(1, 'Please provide a description or base style.'),
})

type FormValues = z.infer<typeof formSchema>

export default function AiStylistPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [variations, setVariations] = useState<string[]>([])
  const { toast } = useToast()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      componentType: 'button',
      baseStyle: 'A primary button with a saffron background, dark text, and subtle animations, inspired by traditional Myanmar art.',
    },
  })

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true)
    setVariations([])
    try {
      const result = await generateStyleVariations(data)
      if (result.styleVariations && result.styleVariations.length > 0) {
        setVariations(result.styleVariations)
        toast({
          title: 'Styles Generated',
          description: `Successfully generated ${result.styleVariations.length} variations.`,
        })
      } else {
        throw new Error('No variations were returned by the AI.')
      }
    } catch (error) {
      console.error('Error generating styles:', error)
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description:
          error instanceof Error ? error.message : 'Failed to generate style variations. Please try again later.',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle className="font-headline">Generate Styles</CardTitle>
          <p className="text-sm text-muted-foreground pt-1">Use AI to suggest styles tailored to the Myanmar context.</p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="componentType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Component Type</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a component type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="button">Button</SelectItem>
                        <SelectItem value="card">Card</SelectItem>
                        <SelectItem value="form">Form</SelectItem>
                        <SelectItem value="modal">Modal</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      The UI component for which you want style ideas.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="baseStyle"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description or Base Style</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., A button that looks like a traditional Myanmar lacquerware piece."
                        {...field}
                        rows={5}
                      />
                    </FormControl>
                    <FormDescription>
                      Describe the style you are aiming for.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading ? 'Generating...' : 'Generate Variations'}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="space-y-6 lg:col-span-2">
        <h2 className="font-headline text-2xl font-semibold">
          Suggested Variations
        </h2>
        {isLoading && (
          <div className="space-y-4">
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        )}
        {!isLoading && variations.length === 0 && (
          <Card className="flex h-48 items-center justify-center border-dashed">
            <p className="text-center text-muted-foreground">
              Your generated styles will appear here.
            </p>
          </Card>
        )}
        <div className="space-y-4">
          {variations.map((style, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="font-headline text-lg">Variation {index + 1}</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-muted p-4 rounded-md overflow-x-auto text-sm font-code">
                  <code>{style}</code>
                </pre>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
