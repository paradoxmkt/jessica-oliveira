"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { aiStyleAdvisor } from '@/ai/flows/ai-style-advisor';
import type { AiStyleAdvisorOutput } from '@/ai/flows/ai-style-advisor';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  mediaFile: z.custom<FileList>().refine(files => files?.length > 0, 'É necessária uma imagem.'),
  contentGoal: z.string().min(10, 'Descreva o objetivo com pelo menos 10 caracteres.'),
  targetAudience: z.string().min(10, 'Descreva seu público-alvo com pelo menos 10 caracteres.'),
});

type FormValues = z.infer<typeof formSchema>;

export default function AiStyleAdvisor() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AiStyleAdvisorOutput | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      contentGoal: '',
      targetAudience: '',
    },
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
        setPreview(null);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    setResult(null);

    try {
      const mediaDataUri = await fileToBase64(values.mediaFile[0]);

      const response = await aiStyleAdvisor({
        mediaDataUri,
        contentGoal: values.contentGoal,
        targetAudience: values.targetAudience,
      });

      setResult(response);
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Ocorreu um erro',
        description: 'Não foi possível obter as sugestões. Tente novamente.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Consultor de Estilo IA</CardTitle>
          <CardDescription>Receba sugestões para otimizar suas mídias.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="mediaFile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Arquivo de Mídia</FormLabel>
                    <FormControl>
                        <Input 
                            type="file" 
                            accept="image/*"
                            onChange={(e) => {
                                field.onChange(e.target.files);
                                handleFileChange(e);
                            }}
                            className="file:text-primary file:font-semibold"
                        />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {preview && (
                 <div className="relative w-full aspect-video rounded-md overflow-hidden border">
                    <Image src={preview} alt="Pré-visualização da mídia" fill className="object-cover" />
                </div>
              )}
              <FormField
                control={form.control}
                name="contentGoal"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Objetivo do Conteúdo</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Ex: Aumentar engajamento, gerar mais vendas..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="targetAudience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Público-Alvo</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Ex: Homens de 25-40 anos, interessados em lifestyle..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full btn-gradient shadow-lg">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analisando...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Obter Sugestões
                  </>
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
      
      <div className="flex items-center justify-center min-h-[400px]">
        {isLoading && (
            <div className="flex flex-col items-center gap-4 text-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary"/>
                <p className="text-lg font-semibold text-foreground/80">Nossa IA está analisando sua imagem...</p>
                <p className="text-sm text-foreground/60">Isso pode levar alguns instantes.</p>
            </div>
        )}
        {!isLoading && result && (
          <Card className="w-full shadow-lg animate-in fade-in-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wand2 className="text-primary"/>
                Sugestões da IA
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm dark:prose-invert max-w-none text-foreground/90">
                <p>{result.suggestions}</p>
              </div>
            </CardContent>
             <CardFooter>
                <p className="text-xs text-foreground/50">Lembre-se que estas são sugestões geradas por IA.</p>
             </CardFooter>
          </Card>
        )}
        {!isLoading && !result && (
            <div className="flex flex-col items-center gap-4 text-center p-8 border-2 border-dashed rounded-lg">
                 <Wand2 className="h-12 w-12 text-foreground/30"/>
                <p className="text-lg font-semibold text-foreground/60">As sugestões aparecerão aqui.</p>
            </div>
        )}
      </div>
    </div>
  );
}
