/**
 * @param {any} doc
 */
export default function (doc) {
  /** @type {Array<{ message: string; instancePath: string }>} */
  const errors = []
  let isValid = true

  const checkedDocumentCategories = new Set(['informational_advisory'])

  if (!checkedDocumentCategories.has(doc.document?.category))
    return { errors, isValid }

  isValid = doc.vulnerabilities === undefined

  if (!isValid) {
    errors.push({
      instancePath: '/vulnerabilities',
      message: 'must not exist',
    })
  }
  return { errors, isValid }
}
