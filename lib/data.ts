// This is a mock data service that would be replaced with actual API calls in a real application

// Define the Profile type
export interface Profile {
  id: string
  name: string
  photo: string
  description: string
  address: string
  email?: string
  phone?: string
  title?: string
  company?: string
  interests?: string[]
  joinDate?: string
}

// Mock data
let profiles: Profile[] = [
  {
    id: "1",
    name: "Jane Smith",
    photo: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?w=740",
    description:
      "Jane is a software engineer with over 10 years of experience in web development. She specializes in React and Node.js applications.",
    address: "123 Tech Lane, San Francisco, CA",
    email: "jane.smith@example.com",
    phone: "+1 (555) 123-4567",
    title: "Senior Software Engineer",
    company: "TechCorp Inc.",
    interests: ["Coding", "Hiking", "Photography"],
    joinDate: "January 2020",
  },
  {
    id: "2",
    name: "John Doe",
    photo: "https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?t=st=1743595166~exp=1743598766~hmac=b16b1d664dd0ba0774269ae2e82853a3fb8ddfee30ab6cb779a6ed7baa5d9dff&w=740",
    description:
      "John is a marketing specialist with a passion for digital campaigns. He has worked with numerous Fortune 500 companies to improve their online presence.",
    address: "456 Market Street, New York, NY",
    email: "john.doe@example.com",
    phone: "+1 (555) 987-6543",
    title: "Marketing Director",
    company: "Global Marketing Solutions",
    interests: ["Digital Marketing", "Travel", "Music"],
    joinDate: "March 2019",
  },
  {
    id: "3",
    name: "Emily Johnson",
    photo: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?w=740",
    description:
      "Emily is a UX designer focused on creating intuitive and accessible user experiences. She believes in user-centered design and iterative testing.",
    address: "789 Design Blvd, Austin, TX",
    email: "emily.johnson@example.com",
    phone: "+1 (555) 234-5678",
    title: "Lead UX Designer",
    company: "Creative Design Studio",
    interests: ["UX Design", "Art", "Reading"],
    joinDate: "June 2021",
  },
  {
    id: "4",
    name: "Michael Chen",
    photo: "https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?t=st=1743595166~exp=1743598766~hmac=b16b1d664dd0ba0774269ae2e82853a3fb8ddfee30ab6cb779a6ed7baa5d9dff&w=740",
    description:
      "Michael is a data scientist specializing in machine learning algorithms. He has contributed to several research papers on AI and predictive analytics.",
    address: "101 Data Drive, Seattle, WA",
    email: "michael.chen@example.com",
    phone: "+1 (555) 876-5432",
    title: "Data Scientist",
    company: "AI Innovations",
    interests: ["Machine Learning", "Chess", "Cooking"],
    joinDate: "September 2020",
  },
  {
    id: "5",
    name: "Sarah Williams",
    photo: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?w=740",
    description:
      "Sarah is a project manager with a background in agile methodologies. She excels at coordinating cross-functional teams and delivering projects on time.",
    address: "202 Agile Avenue, Chicago, IL",
    email: "sarah.williams@example.com",
    phone: "+1 (555) 345-6789",
    title: "Senior Project Manager",
    company: "Project Solutions Ltd.",
    interests: ["Agile", "Yoga", "Gardening"],
    joinDate: "April 2018",
  },
  {
    id: "6",
    name: "David Kim",
    photo: "https://img.freepik.com/free-vector/mans-face-flat-style_90220-2877.jpg?t=st=1743595166~exp=1743598766~hmac=b16b1d664dd0ba0774269ae2e82853a3fb8ddfee30ab6cb779a6ed7baa5d9dff&w=740",
    description:
      "David is a financial analyst with expertise in investment strategies. He helps clients optimize their portfolios and plan for long-term financial goals.",
    address: "303 Finance Street, Boston, MA",
    email: "david.kim@example.com",
    phone: "+1 (555) 456-7890",
    title: "Financial Advisor",
    company: "Wealth Management Partners",
    interests: ["Finance", "Running", "Travel"],
    joinDate: "July 2019",
  },
]

// Get all profiles
export function getProfiles(): Profile[] {
  return [...profiles]
}

// Get a profile by ID
export function getProfileById(id: string): Profile | undefined {
  return profiles.find((profile) => profile.id === id)
}

// Add a new profile
export function addProfile(profileData: Omit<Profile, "id">): Profile {
  const newProfile = {
    ...profileData,
    id: Math.random().toString(36).substring(2, 9), // Generate a random ID
  }

  profiles.push(newProfile)
  return newProfile
}

// Update a profile
export function updateProfile(id: string, profileData: Partial<Profile>): Profile | undefined {
  const index = profiles.findIndex((profile) => profile.id === id)

  if (index !== -1) {
    profiles[index] = {
      ...profiles[index],
      ...profileData,
    }
    return profiles[index]
  }

  return undefined
}

// Delete a profile
export function deleteProfile(id: string): boolean {
  const initialLength = profiles.length
  profiles = profiles.filter((profile) => profile.id !== id)
  return profiles.length < initialLength
}

