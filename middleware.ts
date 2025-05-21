import { NextRequest, NextResponse } from 'next/server'
import { defaultLocale, locales } from './i18n-config'

// Список путей, которые не требуют перенаправления
const publicFiles = [
    '/favicon.ico',
    '/robots.txt',
    '/sitemap.xml',
    '/api/',
]

// Функция для проверки, является ли путь одним из публичных файлов
const isPublicFile = (path: string) => {
    return publicFiles.some(file => path.startsWith(file))
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Пропускаем публичные файлы и API
    if (isPublicFile(pathname)) {
        return
    }

    // Проверяем, есть ли в начале пути локаль
    const pathnameHasLocale = locales.some(
        locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Определяем предпочтительный язык из заголовка Accept-Language
    const acceptLanguage = request.headers.get('accept-language')
    let locale = defaultLocale

    if (acceptLanguage) {
        const preferredLocale = acceptLanguage
            .split(',')
            .map(lang => lang.split(';')[0].trim())
            .find(lang => locales.includes(lang.substring(0, 2) as any))

        if (preferredLocale) {
            locale = preferredLocale.substring(0, 2) as (typeof locales)[number]
        }
    }

    // Строим новый URL с локалью
    const newUrl = new URL(`/${locale}${pathname}`, request.url)

    // Копируем параметры запроса
    request.nextUrl.searchParams.forEach((value, key) => {
        newUrl.searchParams.set(key, value)
    })

    return NextResponse.redirect(newUrl)
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|api).*)',
    ],
}