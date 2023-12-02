import {useEffect, useState} from "react";
import {ArcElement, Chart as ChartJS, Legend, Tooltip} from 'chart.js';
import {Pie} from "react-chartjs-2";
import {RotateLoader} from "react-spinners"

ChartJS.register(ArcElement, Tooltip, Legend);


export const Data = () => {

    const [data, setData] = useState([])
    const [percentage, setPercentage] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [err, setErr] = useState("")

    useEffect(() => {
        try {
            async function fetchPostHandler() {
                setIsLoading(true)
                const response = await fetch("https://jsonplaceholder.typicode.com/posts")
                const jsonData = await response.json()
                const filterData = jsonData.filter((user) => user.userId === 1)
                const totalPost = jsonData.length
                const postsFromUserID_1 = filterData.length
                const remainingPost = totalPost - postsFromUserID_1
                setData(filterData)
                setPercentage({remainingPost, postsFromUserID_1})
                setIsLoading(false)
            }

            fetchPostHandler()

        } catch (e) {
            setErr("Check your Internet Connection or The API Endpoint you are fetching from.")
        }

    }, [])

    const pieData = {
        labels: ['UserID-1', 'Other'],
        datasets: [
            {
                label: "Percentage of Post From UserID's",
                data: [percentage?.postsFromUserID_1, percentage?.remainingPost],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1,
            },
        ],
    }
    return (
        isLoading ? <div className="text-center my-96">
                <RotateLoader size="50px" color="white"/>
            </div> :
            <div className="flex justify-between">

                <div className="overflow-x-auto mx-20 my-24 items-center">
                    <table className="table-auto w-full border-collapse border border-slate-800">
                        <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-slate-800 px-4 py-2">ID</th>
                            <th className="border border-slate-800 px-4 py-2">Title</th>
                            <th className="border border-slate-800 px-4 py-2">Body</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data?.map(post => (
                            <tr key={post.id}>
                                <td className="text-sm border border-slate-800 px-4 py-2 text-slate-400">{post.id}</td>
                                <td className="text-sm border border-slate-800 px-4 py-2 text-slate-200">{post.title}</td>
                                <td className="text-sm border border-slate-800 px-4 py-2 text-slate-200">{post.body}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
                <div className="mx-20 my-24">
                    <Pie data={pieData}/>;
                </div>
            </div>
    )
}