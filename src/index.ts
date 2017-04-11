import { get } from 'getvalue'
import { parse } from 'json-pointer'

export interface SchemaObject {
  [key: string]: Schema
}

export type SchemaArray = (string | SchemaObject)[]
export type Schema = string | SchemaObject | SchemaArray

/**
 * Map the input to the output using the schema.
 */
export function map <T extends object> (schema: SchemaObject, input: any): T
export function map <T extends any[]> (schema: SchemaArray, input: any): T
export function map <T> (schema: string, input: any): T | undefined
export function map <T> (schema: Schema, input: any): T | undefined
export function map <T> (schema: Schema, input: any): T | undefined {
  if (typeof schema === 'string') {
    return get<T | undefined>(input, parse(schema))
  }

  if (Array.isArray(schema)) {
    return schema.map((itemSchema) => map<any>(itemSchema, input)) as any
  }

  const result = {} as any

  for (const key of Object.keys(schema)) {
    result[key] = map(schema[key], input)
  }

  return result
}
