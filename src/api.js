export function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans";
    const promise = fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch vans");
            }
            return res;
        })
        .then((res) => res.json())
        .then((res) => res.vans);
    return promise;
}

export function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
    const promise = fetch(url)
        .then((res) => {
            if (!res.ok) {
                throw new Error("Failed to fetch vans");
            }
            return res;
        })
        .then((res) => res.json())
        .then((res) => res.vans);
    return promise;
}

export async function loginUser(creds) {
    const res = await fetch("/api/login", { method: "post", body: JSON.stringify(creds) });
    const data = await res.json();
    if (res.ok) {
        localStorage.setItem("loggedin", true);
    }
    if (!res.ok) {
        localStorage.removeItem("loggedin");
        throw new Error(data.message);
    }
    return data;
}
