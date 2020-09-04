import React from "react";
import DisplayApplicationImgs from "./DisplayApplicationImgs";
import DisplayYearlyInfo from "./DisplayYearlyInfo";
import { manipulateData } from "./manipulateData";
import { filterValues } from "../../helperFunctions/helperFunctions";
import { axiosWithAuth } from "../../utils/axiosWithAuth";

const SingleResult = ({ application }) => {
  let data = manipulateData(application);
  const { images, pdf_file, yearly_information } = data;

  const deletePdf = (obj) => {
    axiosWithAuth()
      .delete(
        `${process.env.REACT_APP_API_URL}/api/application/delete-pdf/${obj.id}`
      )
      .then((res) =>
        console.log("what is the response for deleting the pdf ? ", res.data)
      )
      .catch((err) => console.log(err.response.data.errorMessage));
  };

  const ceiling_condition = filterValues(data.ceiling_condition);
  const ceiling_type = filterValues(data.ceiling_type);
  const construction_type = filterValues(data.construction_type);
  const f_p_taxes = filterValues(data.f_p_taxes);
  const has_pool = filterValues(data.has_pool);
  const heater_type = filterValues(data.heater_type);
  const is_panel_open = filterValues(data.is_panel_open);
  const packages = filterValues(data.packages);
  const s_p_taxes = filterValues(data.s_p_taxes);
  const sombreado_type = filterValues(data.sombreado_type);
  const with_hoa = filterValues(data.with_hoa);
  const with_solar_panel = filterValues(data.with_solar_panel);

  return (
    <div className="inner-wrapper">
      <div className="user-info">
        <h3>informacion de los propietarios</h3>
        <p className="package-type">
          Typo de paquete: <span>{packages}</span>
        </p>
        <div className="personNumOne">
          <p>
            1. Nombre: <span>{data.first_person_name}</span>
          </p>
          <p>
            Tel: <span>{data.first_person_number}</span>
          </p>
          <p>
            Declara impuestos: <span>{f_p_taxes}</span>
          </p>
          <p>
            Correo electronico <span>{data.first_person_email}</span>
          </p>
        </div>
        <div className="personNumTwo">
          <p>
            2. Nombre: <span>{data.second_person_name}</span>
          </p>
          <p>
            Tel: <span>{data.second_person_number}</span>
          </p>
          <p>
            Declara impuestos: <span>{s_p_taxes}</span>
          </p>
          <p>
            Correo electronico <span>{data.second_person_email}</span>
          </p>
        </div>

        <div className="address">
          <p>
            Direccion: <span>{data.address}</span>
          </p>
          <p>
            Estado: <span>{data.state}</span>
          </p>
          <p>
            Codigo postal: <span>{data.zipcode}</span>
          </p>
        </div>
      </div>
      <div className="property-info">
        <h3>informacion de la propiedad</h3>
        <p>
          Año construida: <span>{data.house_year_built}</span>
        </p>
        <p>
          Pies cuadrados: <span>{data.house_sqrtfoot}</span>
        </p>
        <p>
          Cuantos pisos: <span>{data.house_total_floors}</span>
        </p>

        <p>
          Tipo de construccion: <span>{construction_type}</span>
        </p>
        <p>
          Tipo de techo: <span>{ceiling_type}</span>
        </p>
        <p>
          Condicion del techo: <span>{ceiling_condition}</span>
        </p>
        <p>
          Sombreado del techo: <span>{sombreado_type}</span>
        </p>
        <p>
          Tiene alberca: <span>{has_pool}</span>
        </p>
        <p>
          GATE: Contraseña de entrada: <span>{data.gate_number}</span>
        </p>
        <p>
          HOA: <span>{with_hoa}</span>
        </p>
        <p>
          HOA info: <span>{data.hoa_information}</span>
        </p>
        <p>
          HOA tel: <span>{data.hoa_phone}</span>
        </p>
      </div>

      <div className="power-infor-equipment">
        <p>
          El panel electrico esta cerrado: <span>{is_panel_open}</span>
        </p>
        <p>
          En caso que el panel eléctrico este cercado, en breves palabras
          explique en que parte de la casa esta ubicado:{" "}
          <span>this is the anwer for this question</span>
        </p>
        <p>
          Tamaño del panel eléctrico: <span>{data.power_panel_size}</span>
        </p>
      </div>
      <div className="ac-info">
        <p>
          Cuantos aires acondicionados: <span>{data.ac_count}</span>
        </p>
        <p>
          Cuantos calentones: <span>{data.heater_count}</span>
        </p>
        <p>
          Tipo de calentador de agua: <span>{heater_type}</span>
        </p>
        <p>
          Tiene sistema solar existente para calentar el agua:{" "}
          <span>{with_solar_panel}</span>
        </p>
      </div>
      <div className="power-acc">
        <p>
          Numero de cuenta de NV Energy{" "}
          <span>{data.power_bill_acc_number}</span>
        </p>
      </div>
      <div className="anual-power-info">
        <h3>Consumo anual de kilowatts y el costo de mes tras mes</h3>
        {yearly_information.map((mnth, i) => (
          <DisplayYearlyInfo key={i} months={mnth} />
        ))}
      </div>

      {images.map((img) => (
        <DisplayApplicationImgs key={img.id} img={img} />
      ))}

      {pdf_file.length ? (
        <div className="pdf" onClick={() => deletePdf(pdf_file[0])}>
          <a
            href={pdf_file[0].pdf_file}
            download={pdf_file[0].pdf_name}
            rel="noopener noreferrer"
          >
            pdf
          </a>
        </div>
      ) : (
        <p className="no-file">No pdf file</p>
      )}
    </div>
  );
};

export default SingleResult;
