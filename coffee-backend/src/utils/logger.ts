export const logInfo = (...args: any[]) => {
    console.log("[INFO]", ...args)
}

export const logWarn = (...args: any[]) => {
    console.warn("[WARN]", ...args)
}

export const logError = (...args: any[]) => {
    console.error("[ERROR]", ...args)
}