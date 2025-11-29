import { MAX_PAGE, MAX_PAGE_SIZE, MAX_SEARCH_TERM_LENGTH } from '#config/pagination'
import vine from '@vinejs/vine'

export const paginationValidator = vine.compile(
  vine.object({
    // for pagination
    page: vine.number().withoutDecimals().min(1).max(MAX_PAGE).optional(),
    page_size: vine.number().withoutDecimals().min(1).max(MAX_PAGE_SIZE).optional(),

    // fuzzy search term
    search: vine.string().trim().maxLength(MAX_SEARCH_TERM_LENGTH).optional(),
  })
)
