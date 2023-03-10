import * as z from "zod"
import * as _ from "./index"

export const GeneLabelModel = z.object({
  geneId: z.string(),
  labelId: z.string(),
})

export interface CompleteGeneLabel extends z.infer<typeof GeneLabelModel> {
  gene: _.CompleteGene
  label: _.CompleteLabel
}

/**
 * RelatedGeneLabelModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const RelatedGeneLabelModel: z.ZodSchema<CompleteGeneLabel> = z.lazy(() => GeneLabelModel.extend({
  gene: _.RelatedGeneModel,
  label: _.RelatedLabelModel,
}))
