import {ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";

type Profile = {
  login: string,
  avatar_url: string,
  location: string,
  name: string,
  bio: string,
  html_url: string,
  followers: string,
  following: string,
  repos_url: string
}

type Repo = {
  name: string,
  html_url: string
}

export default function GithubProfile(){
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState<Profile | null>(null)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null)
  const API_URL = "https://api.github.com/users/"
  const [userRepo, setUserRepo] = useState<Repo[] | null>(null)

  const fetchUser = useCallback( async () => {
    console.log("enter here")
    if (username === "") return
    console.log("loading")
    setIsLoading(true);
    const response = await fetch(API_URL + username)
    const data = await response.json();
    if(response.ok){
      setProfile((data))
      return
    }
    setError( () => new Error("An error occurred"))
  }, [username])

  const fetchRepos = useCallback( async () => {
    if (profile === null) return
    const REPO_URL = profile?.repos_url
    const response = await fetch(REPO_URL);
    const data = await response.json();
    return setUserRepo(data);
  }, [profile])

  useEffect( () => {
    fetchRepos()
  }, [fetchRepos])

  const user = useMemo( () => profile, [profile])

  const handleUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchUser();
  }

  return (
    <>
      <header className="bg-gray-100 py-5 flex justify-center flex-col items-center">
        <h1 className="text-5xl font-bold text-center text-gray-500">Github Profile</h1>
        <form onSubmit={handleSearch} className="py-6">
        <input type="text" onChange={handleUsername} value={username} className="border-2 rounded px-1 focus:ring-2 focus:ring-green-500 focus:border-green-500" placeholder="Enter username"/>
        </form>
      </header>
      {
        profile &&
        (
          <div className="p-5 flex items-center flex-col">
            <div>
              <div className=" flex items-center justify-between" style={{position:"relative"}}>
                <div className="flex items-center">
                  <img src={user?.avatar_url} alt="Avatar" className="w-50 rounded-full w-40" />
                  <div className="px-5">
                  <h3 className=" text-3xl font-bold">{user?.name}</h3>
                  <h3 className="text-2xl text-gray-500 font-bold">@{user?.login}</h3>
                  <a href={user?.html_url || ""} target="_blank" style={{position:"absolute",bottom:'20px' }} className="text-gray-500 underline hover:opacity-50" rel="noreferrer">Goto profile</a>
                  </div>
                </div>
                <div className="flex mx-5">

                  <div className="mx-5 flex flex-col items-center justify-center">
                        <span className="text-2xl font-bold">
                          {user?.followers}
                        </span>
                        <span>
                          Followers
                        </span>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold">
                      {user?.following}
                    </span>
                    <span>
                      Following
                    </span>
                  </div>
                </div>
              </div>
              <div className="m-5">
                  {
                    user?.bio
                  }
              </div>
            </div>
            <h3 className="font-bold text-3xl text-center">Repository</h3>
            <div className="w-1/2 flex-wrap flex" >
              {
                userRepo?.map( repo => {
                  return (
                    <a  href={repo.html_url} className="mx-1" style={{width:"45%"}}>
                      <div className="border rounded shadow flex items-center px-5 my-3" style={{height:"60px"}}>
                        {
                          repo.name
                        }
                      </div>
                    </a>
                  )
                })
              }
            </div>
          </div>

        )
      }

    </>
  )
}
