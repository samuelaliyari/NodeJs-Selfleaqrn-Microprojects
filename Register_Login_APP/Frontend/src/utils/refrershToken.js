

export const refreshToken = async (accessToken, setAuthorization) => {
    const [_, claimBase64] = accessToken.split(".");
    const claim = JSON.parse(atob(claimBase64))

    const remainingTime = (claim.exp - claim.iat - 120) * 1000
    console.log(remainingTime)

    const refreshFetch = async () => {
        const fetchdata = await fetch("http://localhost:3000/api/v1/users/renew", { credentials: "include" });

        const { success, newAccessToken, error } = await fetchdata.json()
        if (!success) console.log(error)
        else return newAccessToken
    }

    setTimeout(async () => {
        console.log("renewing Token")
        const newAccessToken = await refreshFetch();
        setAuthorization(`Bearer ${newAccessToken}`);
        refreshToken(newAccessToken, setAuthorization);
        console.log("newAccessToken: " + newAccessToken)
    }, remainingTime);
}