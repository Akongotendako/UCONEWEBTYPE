export type Role = "admin" | "user";

const validateRoles: Role[] = ["admin", "user"];

export const getUserRole = (role: string | undefined | null): Role => {
    return validateRoles.includes(role as Role) ? (role as Role) : "user"
}