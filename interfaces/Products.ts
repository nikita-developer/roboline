export default interface Product {
    id: string
    categoryId: string
    subCategoryId: string
    title: string
    subtitle: null | string
    htmlTitle: string
    metaDescription: string
    metaKeywords: string
    image: string
    vendorCode: string
    costByCard: number
    cost: number
    oldCost: number
    hit: boolean
    new: boolean
    isProductOfTheDay: boolean
    productOfTheDayLimit: number
    newPeriodStart: null | string
    newPeriodEnd: null | string
    sale: boolean
    discountActive: boolean
    disableControl: boolean
    isOutOfStock: boolean
    isGift: boolean
    isDiscountable: boolean
    isGiftCertApplied: boolean
    isLowCalories: boolean
    sortIndex: number
    isFavorite: boolean
}
