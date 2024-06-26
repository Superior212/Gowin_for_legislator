


import { AlarmClockCheck, BarChart4, BookUser, Calendar, House, MessageSquareMore, User, UserRoundCog, Users } from "lucide-react";

export const CUSTOMERS = [
    {
        to: "home",
        icon: House,
        label: " Dashboard",
    },
    {
        to: "calendar",
        icon: Calendar,
        label: "Calendar",
    },
    {
        to: "constituents-chat",
        icon: MessageSquareMore,
        label: "Chat with Constituents",
    },
    {
        to: "task",
        icon: AlarmClockCheck,
        label: "Tasks",
    },
    {
        to: "users",
        icon: Users,
        label: "Users",
    },
    {
        to: "constituency",
        icon: BookUser,
        label: "Constituency",
    },
    {
        to: "levels",
        icon: BarChart4,
        label: "State/Constituency Levels",
    },
    {
        to: "profile",
        icon: User,
        label: "Profile",
    },
    {
        to: "legislator-profile",
        icon: UserRoundCog,
        label: "Legislator Profile",
    },
];