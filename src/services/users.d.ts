interface RequestPostLogin {
    email: string
    password: string
}

interface ResponsePostLogin {
    error?: string
    token?: string
    name?: string
}

export type { RequestPostLogin, ResponsePostLogin }