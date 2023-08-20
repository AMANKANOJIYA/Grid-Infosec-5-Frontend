"use client";

function model() {
  return (
    <div className="model">
      <div className="modelcontent">
        <div className="modelheader">
          <h1>Logline</h1>
          <h3>Problem</h3>
        </div>
        <div className="modelbody">
          <h3>Problem Solution</h3>
        </div>
      </div>
    </div>
  );
}

export default function Output() {
  const openModel = (id: any) => {
    console.log(id);
  };
  const data = [
    {
      id: 1,
      logline:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, sint.",
      problem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iste! Lorem,sfsd fdsds fdfs fsfsfs dfsdfsdf sdfsdf",
      probsol:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum neque maxime illo soluta, impedit voluptatibus rem vero quia sunt repellat repellendus optio. Veritatis ratione ab numquam alias sapiente eum ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil magnam fugiat cum iure. Repellendus quaerat, delectus corporis autem est dolore",
    },
    {
      id: 2,
      logline:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, sint.",
      problem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iste! Lorem,sfsd fdsds fdfs fsfsfs dfsdfsdf sdfsdf",
      probsol:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum neque maxime illo soluta, impedit voluptatibus rem vero quia sunt repellat repellendus optio. Veritatis ratione ab numquam alias sapiente eum ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil magnam fugiat cum iure. Repellendus quaerat, delectus corporis autem est dolore",
    },
    {
      id: 3,
      logline:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, sint.",
      problem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iste! Lorem,sfsd fdsds fdfs fsfsfs dfsdfsdf sdfsdf",
      probsol:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum neque maxime illo soluta, impedit voluptatibus rem vero quia sunt repellat repellendus optio. Veritatis ratione ab numquam alias sapiente eum ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil magnam fugiat cum iure. Repellendus quaerat, delectus corporis autem est dolore",
    },
    {
      id: 4,
      logline:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, sint.",
      problem:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iste! Lorem,sfsd fdsds fdfs fsfsfs dfsdfsdf sdfsdf",
      probsol:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum neque maxime illo soluta, impedit voluptatibus rem vero quia sunt repellat repellendus optio. Veritatis ratione ab numquam alias sapiente eum ea. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil magnam fugiat cum iure. Repellendus quaerat, delectus corporis autem est dolore",
    },
  ];
  return (
    <>
      <div className="navbar">
        <img src="/flipkart.png" alt="Logo" className="logoimage" />
      </div>
      <div className="sectionoutput">
        {data.map((item: any) => {
          return (
            <div
              className="card"
              key={item.id}
              onClick={() => openModel(item.id)}
            >
              <div className="logline">{item.logline}</div>
              <div className="problem">{item.problem}</div>
              <div className="probsol">{item.probsol}</div>
              <div className="showmore">Show more ...</div>
            </div>
          );
        })}
        {/* <div className="card">
          <div className="logline">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod,
            sint.
          </div>
          <div className="problem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            iste! Lorem,sfsd fdsds fdfs fsfsfs dfsdfsdf sdfsdf
          </div>
          <div className="probsol">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum
            neque maxime illo soluta, impedit voluptatibus rem vero quia sunt
            repellat repellendus optio. Veritatis ratione ab numquam alias
            sapiente eum ea. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Nihil magnam fugiat cum iure. Repellendus quaerat, delectus
            corporis autem est dolore
          </div>
          <div className="showmore">Show more ...</div>
        </div> */}
      </div>
    </>
  );
}
