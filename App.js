// import logo from './logo.svg';
import './App.css';
import Card from './Card'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  let data = [
    {
      plan: "Free",
      price: "0",
      highlight: true,
      highlight1: true,
      features: [
        {
          title: "Single User"
        },
        {
          title: "5GB Storage"
        },
        {
          title: "Unlimited Public Projects"
        },
        {
          title: "Community Access"
        }],
      other: [
        {
          title: "Unlimited Private Projects"
        },
        {
          title: "Dedicated phone support"
        },
        {
          title: "Free Subdomain"
        }
      ],
      some: "Monthly status reports"

    },
    {
      plan: "Plus",
      price: "9",
      highlight: false,
      highlight1: true,
      features: [
        {
          title: <b>5 Users</b>
        },
        {
          title: "50GB Storage"
        },
        {
          title: "Unlimited Public Projects"
        },
        {
          title: "Community Access"
        }
      ],
      other: [
        {
          title: "Unlimited Private Projects"
        },
        {
          title: "Dedicated phone support"
        },
        {
          title: "Free Subdomain"
        }
      ],
      some: "Monthly status reports"
    },
    {
      plan: "Pro",
      price: "49",
      features: [
        {
          title: <b>Unlimited Users</b>
        },
        {
          title: "150GB Storage"
        },
        {
          title: "Unlimited Public Projects"
        },
        {
          title: "Community Access"
        }
      ],
      other: [
        {
          title: "Unlimited Private Projects"
        },
        {
          title: "Dedicated phone support"
        },
        {
          title: "Unlimited Free Subdomain"
        }
      ],
      some: "Monthly status reports"

    }
  ]
  return (
    <section className='pricing py-5'>
      <div className="container">
        <div className='row'>
          {data.map((usr) => {
            return <Card usr={usr} ></Card>
          })}
        </div>


      </div>
    </section>
  );
}

export default App;
