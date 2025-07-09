import Header from "./Header";
import Menu from "./Menu";
//import Content from "./Content";
import Footer from "./Footer";

function MasterEquipment() {
  return (
    <>
      <Header />
      <Menu />
      {/* Content */}
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Master Equipment</h1>
              </div>
              {/* /.col */}
              <div className="col-sm-6">
                {/* <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Dashboard v2</li>
          </ol> */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}

        {/* Main content */}
        <section className="content">
          <div className="container-fluid"></div>
          {/*/. container-fluid */}
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      {/* End Content */}
      <Footer />
    </>
  );
}

export default MasterEquipment;
