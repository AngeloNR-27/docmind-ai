import DashboardLayout from "../components/dashboard/DashboardLayout";
import UploadZone from "../components/upload/UploadZone";


function Dashboard(){

  return (

    <DashboardLayout>

        <div>

        <h2 className="
            text-4xl
            font-bold
            text-white
        ">
            Bienvenue sur DocMind AI
        </h2>


        <p className="
            mt-3
            text-slate-400
        ">
            Commencez par importer votre document.
        </p>



        <div className="mt-10">

            <UploadZone />

        </div>


        </div>


    </DashboardLayout>

  );

}


export default Dashboard;