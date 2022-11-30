import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "My workspace",
        path: "/",
        image: require("../assets/images/Avatar.png"),
    },
    {
        title: "Favorites",
        path: "/favorites",
        iconOpened: <RiIcons.RiArrowUpSLine />,
        iconClosed: <RiIcons.RiArrowDownSLine />,
        showSubNav: false,
        subNav: [
            {
                title: "Marketing",
                path: "/favorites/marketing",
            },
            {
                title: "Mobile App",
                path: "/favorites/mobileApp",
            },
        ],
    },
    {
        title: "My Projects",
        path: "/myProjects",
        iconOpened: <RiIcons.RiArrowUpSLine />,
        iconClosed: <RiIcons.RiArrowDownSLine />, 
        showSubNav: false,
        subNav: [
            {
                title: "Marketing",
                path: "/myProjects/marketing",
            },
            {
                title: "Landing Pages App",
                path: "/myProjects/landingPages",
            },
            {
                title: "Wedding",
                path: "/myProjects/wedding",
            },
            {
                title: "Mobile App",
                path: "/myProjects/mobileApp",
            },
            {
                title: "House Construction",
                path: "/myProjects/houseConstruction",
            },
        ],
    },
];

