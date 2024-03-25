
type User = {
    email: string,
    password: string,
}

type Player = {
    Name: string,
    Dob: Date,
    Age: number,
    Weight: number,
    Height: number,
    PreferredFoot: string,
    PrimaryPosition: string,
    SecondaryPosition: string
}

type Division = {
    Title: string,
    AgeLimit: number,
    Players: Player[],
}

type Match = {
    Division: Division,
    Opponent: string,
    Date: Date,
    Result: string,
}

type Partner = {
    name: string,
    contact: string
}