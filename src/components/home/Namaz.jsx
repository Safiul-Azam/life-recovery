import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useEditNamazMutation } from "../../features/namaz/namazApi";

const Namaz = () => {
  const namaz = useSelector((state) => state.namaz.namaz[0]);
  const [editNamaz, { data, isSuccess, isLoading, error }] =
    useEditNamazMutation();
  const [update, setUpdate] = useState(false);

  const { _id } = namaz || {};

  const [fajrCheck, setFajrCheck] = useState({
    complete: false,
    jamaat: true,
    takbir_e_ula: true,
  });
  const [dhuhrCheck, setDhuhrCheck] = useState({
    complete: false,
    jamaat: true,
    takbir_e_ula: true,
  });
  const [asrCheck, setAsrCheck] = useState({
    complete: false,
    jamaat: true,
    takbir_e_ula: true,
  });
  const [maghribCheck, setMaghribCheck] = useState({
    complete: false,
    jamaat: true,
    takbir_e_ula: true,
  });
  const [ishaCheck, setIshaCheck] = useState({
    complete: false,
    jamaat: true,
    takbir_e_ula: true,
  });

  useEffect(() => {
    const { fajr, dhuhr, asr, maghrib, isha } = namaz || {};
    if (namaz) {
      // fajr
      setFajrCheck({
        complete: fajr?.complete,
        jamaat: fajr?.jamaat,
        takbir_e_ula: fajr?.takbir_e_ula,
      });

      // dhuhr
      setDhuhrCheck({
        complete: dhuhr?.complete,
        jamaat: dhuhr?.jamaat,
        takbir_e_ula: dhuhr?.takbir_e_ula,
      });

      // asr
      setAsrCheck({
        complete: asr?.complete,
        jamaat: asr?.jamaat,
        takbir_e_ula: asr?.takbir_e_ula,
      });

      // maghrib
      setMaghribCheck({
        complete: maghrib?.complete,
        jamaat: maghrib?.jamaat,
        takbir_e_ula: maghrib?.takbir_e_ula,
      });

      // isha
      setIshaCheck({
        complete: isha?.complete,
        jamaat: isha?.jamaat,
        takbir_e_ula: isha?.takbir_e_ula,
      });
    }
  }, [namaz]);

  const handleChange = (data) => {
    editNamaz({
      id: _id,
      data,
    });
  };

  useEffect(() => {
    if (!isLoading && isSuccess) {
      setUpdate(false);
    }
  }, [isLoading, isSuccess]);

  useEffect(() => {
    if (_id && update === true) {
      handleChange({
        fajr: fajrCheck,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id, fajrCheck]);

  return (
    <section className="bg-white w-96 h-96 px-5 py-5 rounded-xl">
      <h1 className="text-primary text-center text-2xl font-serif font-semibold py-5 pt-0">
        নামাজের চেকলিস্ট
      </h1>

      <hr className="border-secondary" />

      <div className=" flex flex-col gap-7 pt-5">
        {" "}
        {/* ফজর */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              ফজর
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">জামাত</span>
              <input
                onChange={(e) =>
                  setFajrCheck((prv) => ({
                    ...prv,
                    jamaat: e.target.checked,
                    update: true,
                  }))
                }
                onClick={() => setUpdate(true)}
                disabled={isLoading}
                checked={fajrCheck.jamaat}
                type="checkbox"
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">তাকবীরে উলা</span>
              <input
                onChange={(e) =>
                  setFajrCheck((prv) => ({
                    ...prv,
                    takbir_e_ula: e.target.checked,
                  }))
                }
                onClick={() => setUpdate(true)}
                disabled={isLoading}
                checked={fajrCheck.takbir_e_ula}
                type="checkbox"
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input
              onChange={(e) =>
                setFajrCheck((prv) => ({
                  ...prv,
                  complete: e.target.checked,
                }))
              }
              onClick={() => setUpdate(true)}
              disabled={isLoading}
              checked={fajrCheck.complete}
              type="checkbox"
              className="checkbox checkbox-primary"
            />
          </div>
        </div>
        {/* যোহর */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              যোহর
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">জামাত</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">তাকবীরে উলা</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </div>
        </div>
        {/* আসর */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              আসর
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">জামাত</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">তাকবীরে উলা</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </div>
        </div>
        {/* মাগরিব */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              মাগরিব
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">জামাত</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">তাকবীরে উলা</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </div>
        </div>
        {/* এশা */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              এশা
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">জামাত</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text">তাকবীরে উলা</span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </div>
        </div>
      </div>

      {/* <hr className="border-secondary mt-4" /> */}
    </section>
  );
};

export default Namaz;
