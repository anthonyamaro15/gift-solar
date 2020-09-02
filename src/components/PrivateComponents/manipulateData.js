export const manipulateData = (obj) => {
  const {
    package_premium,
    package_plus,
    package_basico,

    first_person_name,
    first_person_number,
    first_person_email,
    first_person_do_taxes,
    first_person_dont_do_taxes,

    second_person_name,
    second_person_number,
    second_person_email,
    second_person_do_taxes,
    second_person_dont_do_taxes,

    address,
    state,
    city,
    zipcode,

    house_year_built,
    house_sqrtfoot,
    house_total_floors,
    family_residence,
    town_house,
    condominio,
    mobile_home,

    shingle_ceiling_type,
    teja_ceiling_type,
    barro_ceiling_type,
    madera_ceiling_type,
    plano_ceiling_type,

    ceiling_condition_excelent,
    ceiling_condition_good,
    ceiling_condition_pasable,
    ceiling_condition_old,

    sombreado_nada,
    sombreado_poco,
    sombreado_mucho,

    house_with_pool,
    house_with_no_pool,

    gate_number,
    hoa_exist,
    hoa_no_exist,
    hoa_information,
    hoa_phone,

    is_power_panel_close,
    is_power_panel_open,
    desc_for_panel_close,
    power_panel_size,

    ac_count,
    heater_count,
    heater_gas,
    heater_electric,
    heater_solar,
    have_solar_panel,
    dont_have_solar_panel,

    power_bill_acc_number,

    enero_cost,
    enero_kilowatts,
    febrero_cost,
    febrero_kilowatts,
    marzo_cost,
    marzo_kilowatts,
    abril_cost,
    abril_kilowatts,
    mayo_cost,
    mayo_kilowatts,
    junio_cost,
    junio_kilowatts,
    julio_cost,
    julio_kilowatts,
    agosto_cost,
    agosto_kilowatts,
    septiembre_cost,
    septiembre_kilowatts,
    octubre_cost,
    octubre_kilowatts,
    noviembre_cost,
    noviembre_kilowatts,
    diciembre_cost,
    diciembre_kilowatts,
    images,
    pdf_file,
  } = obj;

  const newData = {
    packages: [
      { premium: package_premium },
      { plus: package_plus },
      { basico: package_basico },
    ],

    first_person_name,
    first_person_number,
    first_person_email,
    f_p_taxes: [
      { yes: first_person_do_taxes },
      { no: first_person_dont_do_taxes },
    ],

    second_person_name,
    second_person_number,
    second_person_email,
    s_p_taxes: [
      { yes: second_person_do_taxes },
      { no: second_person_dont_do_taxes },
    ],

    address,
    state,
    city,
    zipcode,

    house_year_built,
    house_sqrtfoot,
    house_total_floors,

    construction_type: [
      { family_residence: family_residence },
      { town_house: town_house },
      { condominio: condominio },
      { mobile_home: mobile_home },
    ],

    ceiling_type: [
      { shingle: shingle_ceiling_type },
      { teja: teja_ceiling_type },
      { barro: barro_ceiling_type },
      { madera: madera_ceiling_type },
      { plano: plano_ceiling_type },
    ],

    ceiling_condition: [
      { excelent: ceiling_condition_excelent },
      { good: ceiling_condition_good },
      { pasable: ceiling_condition_pasable },
      { old: ceiling_condition_old },
    ],

    sombreado_type: [
      { nada: sombreado_nada },
      { poco: sombreado_poco },
      { mucho: sombreado_mucho },
    ],
    has_pool: [{ yes: house_with_pool }, { no: house_with_no_pool }],
    gate_number,
    with_hoa: [{ yes: hoa_exist }, { yes: hoa_no_exist }],
    hoa_information,
    hoa_phone,

    is_panel_open: [{ yes: is_power_panel_close }, { no: is_power_panel_open }],

    desc_for_panel_close,
    power_panel_size,

    ac_count,
    heater_count,

    heater_type: [
      { gas: heater_gas },
      { electric: heater_electric },
      { solar: heater_solar },
    ],

    with_solar_panel: [
      { yes: have_solar_panel },
      { no: dont_have_solar_panel },
    ],
    power_bill_acc_number,

    yearly_information: [
      {
        month: "enero",
        cost: enero_cost,
        kilowatts: enero_kilowatts,
      },
      {
        month: "febrero",
        cost: febrero_cost,
        kilowatts: febrero_kilowatts,
      },
      {
        month: "marzo",
        cost: marzo_cost,
        kilowatts: marzo_kilowatts,
      },
      {
        month: "abril",
        cost: abril_cost,
        kilowatts: abril_kilowatts,
      },
      {
        month: "mayo",
        cost: mayo_cost,
        kilowatts: mayo_kilowatts,
      },
      {
        month: "junio",
        cost: junio_cost,
        kilowatts: junio_kilowatts,
      },
      {
        month: "julio",
        cost: julio_cost,
        kilowatts: julio_kilowatts,
      },
      {
        month: "agosto",
        cost: agosto_cost,
        kilowatts: agosto_kilowatts,
      },
      {
        month: "septiembre",
        cost: septiembre_cost,
        kilowatts: septiembre_kilowatts,
      },
      {
        month: "octubre",
        cost: octubre_cost,
        kilowatts: octubre_kilowatts,
      },
      {
        month: "noviembre",
        cost: noviembre_cost,
        kilowatts: noviembre_kilowatts,
      },
      {
        month: "diciembre",
        cost: diciembre_cost,
        kilowatts: diciembre_kilowatts,
      },
    ],
    images,
    pdf_file,
  };

  return newData;
};
