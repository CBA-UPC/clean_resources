/**
 * PlatformData creates an object representing an internal platform that will
 * respond to the opt-out request.
 * 
 * @param platformKey
 *            a key to uniquely identify the platform
 * @param token
 *            a per-request token used to create a unique cookie.
 * @param statusUrl
 *            the URL used to request a status
 * @param optOutUrl
 *            the URL used to opt-out of the platform
 * @param opInUrl
 *            URL used to opt back into the platform.
 * @param extraParameters
 *            Map of parameters from request to be added to generated URL.
 */
