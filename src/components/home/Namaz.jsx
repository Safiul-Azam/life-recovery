import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useEditNamazMutation,
  useGetNamazsQuery,
} from "../../features/namaz/namazApi";
import { pastDays } from "../../utils/pastDays";

const Namaz = () => {
  const namaz = useSelector((state) => state.namaz.namaz[0]);
  const email = useSelector((state) => state.auth.user.email);
  const day = useSelector((state) => state.filter.day);

  const [editNamaz, { data, isSuccess, isLoading, error }] =
    useEditNamazMutation();
  const [update, setUpdate] = useState(false);

  const prvDays = pastDays(day);

  const { refetch } = useGetNamazsQuery({
    email,
    date: prvDays,
  });

  useEffect(() => {
    refetch();
  }, [refetch, day]);

  useEffect(() => {
    if (data) {
      refetch();
      console.log("Namaz Update & refetch");
    }
    if (error) {
      console.log("Namaz Update error: ", error);
    }
  }, [data, error, refetch, day]);

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

  // update db
  const handleChange = (data) => {
    editNamaz({
      id: _id,
      data,
    });
  };

  // update state
  useEffect(() => {
    if (!isLoading && isSuccess) {
      setUpdate(false);
    }
  }, [isLoading, isSuccess]);

  // fajr
  useEffect(() => {
    if (_id && update === true) {
      handleChange({
        fajr: fajrCheck,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id, fajrCheck]);

  // dhuhr
  useEffect(() => {
    if (_id && update === true) {
      handleChange({
        dhuhr: dhuhrCheck,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id, dhuhrCheck]);

  // asr
  useEffect(() => {
    if (_id && update === true) {
      handleChange({
        asr: asrCheck,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id, asrCheck]);

  // maghrib
  useEffect(() => {
    if (_id && update === true) {
      handleChange({
        maghrib: maghribCheck,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id, maghribCheck]);

  // isha
  useEffect(() => {
    if (_id && update === true) {
      handleChange({
        isha: ishaCheck,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_id, ishaCheck]);

  return (
    <section className="bg-slate-800/[0.5] backdrop-blur-sm w-96 h-full p-6 rounded-md z-10">
      {/* <p className="text-center -mt-3 text-orange-600">
        {date || dateFormat(date)}
      </p> */}
      <h1 className="text-primary text-center text-2xl font-serif font-semibold py-5 pt-0">
        নামাজের চেকলিস্ট
      </h1>

      {/* <hr className="border-secondary" /> */}

      <div className=" flex flex-col gap-7 pt-5">
        {" "}
        {/* ফজর */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              ফজর
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text  text-slate-100">জামাত</span>
              <input
                onChange={(e) =>
                  setFajrCheck((prv) => ({
                    ...prv,
                    jamaat: e.target.checked,
                  }))
                }
                onClick={() => setUpdate(true)}
                disabled={isLoading}
                checked={fajrCheck.jamaat}
                type="checkbox"
                className="checkbox  checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text text-slate-100">তাকবীরে উলা</span>
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
              <span className="label-text text-slate-100">জামাত</span>
              <input
                onChange={(e) =>
                  setDhuhrCheck((prv) => ({
                    ...prv,
                    jamaat: e.target.checked,
                  }))
                }
                onClick={() => setUpdate(true)}
                disabled={isLoading}
                checked={dhuhrCheck.jamaat}
                type="checkbox"
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text text-slate-100">তাকবীরে উলা</span>
              <input
                onChange={(e) =>
                  setDhuhrCheck((prv) => ({
                    ...prv,
                    takbir_e_ula: e.target.checked,
                  }))
                }
                onClick={() => setUpdate(true)}
                disabled={isLoading}
                checked={dhuhrCheck.takbir_e_ula}
                type="checkbox"
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input
              onChange={(e) =>
                setDhuhrCheck((prv) => ({
                  ...prv,
                  complete: e.target.checked,
                }))
              }
              onClick={() => setUpdate(true)}
              disabled={isLoading}
              checked={dhuhrCheck.complete}
              type="checkbox"
              className="checkbox checkbox-primary"
            />
          </div>
        </div>
        {/* আসর */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              আসর
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text text-slate-100">জামাত</span>
              <input
                onChange={(e) =>
                  setAsrCheck((prv) => ({
                    ...prv,
                    jamaat: e.target.checked,
                  }))
                }
                onClick={() => setUpdate(true)}
                disabled={isLoading}
                checked={asrCheck.jamaat}
                type="checkbox"
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text text-slate-100">তাকবীরে উলা</span>
              <input
                onChange={(e) =>
                  setAsrCheck((prv) => ({
                    ...prv,
                    takbir_e_ula: e.target.checked,
                  }))
                }
                onClick={() => setUpdate(true)}
                disabled={isLoading}
                checked={asrCheck.takbir_e_ula}
                type="checkbox"
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input
              onChange={(e) =>
                setAsrCheck((prv) => ({
                  ...prv,
                  complete: e.target.checked,
                }))
              }
              onClick={() => setUpdate(true)}
              disabled={isLoading}
              checked={asrCheck.complete}
              type="checkbox"
              className="checkbox checkbox-primary"
            />
          </div>
        </div>
        {/* মাগরিব */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              মাগরিব
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text text-slate-100">জামাত</span>
              <input
                onChange={(e) =>
                  setMaghribCheck((prv) => ({
                    ...prv,
                    jamaat: e.target.checked,
                  }))
                }
                onClick={() => setUpdate(true)}
                disabled={isLoading}
                checked={maghribCheck.jamaat}
                type="checkbox"
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text text-slate-100">তাকবীরে উলা</span>
              <input
                onChange={(e) =>
                  setMaghribCheck((prv) => ({
                    ...prv,
                    takbir_e_ula: e.target.checked,
                  }))
                }
                onClick={() => setUpdate(true)}
                disabled={isLoading}
                checked={maghribCheck.takbir_e_ula}
                type="checkbox"
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input
              onChange={(e) =>
                setMaghribCheck((prv) => ({
                  ...prv,
                  complete: e.target.checked,
                }))
              }
              onClick={() => setUpdate(true)}
              disabled={isLoading}
              checked={maghribCheck.complete}
              type="checkbox"
              className="checkbox checkbox-primary"
            />
          </div>
        </div>
        {/* এশা */}
        <div className="form-control">
          <div className=" flex justify-between">
            <h1 className="label-text text-lg text-primary font-semibold">
              এশা
            </h1>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text text-slate-100">জামাত</span>
              <input
                onChange={(e) =>
                  setIshaCheck((prv) => ({
                    ...prv,
                    jamaat: e.target.checked,
                  }))
                }
                onClick={() => setUpdate(true)}
                disabled={isLoading}
                checked={ishaCheck.jamaat}
                type="checkbox"
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <div className="flex justify-center items-center gap-2">
              <span className="label-text text-slate-100">তাকবীরে উলা</span>
              <input
                onChange={(e) =>
                  setIshaCheck((prv) => ({
                    ...prv,
                    takbir_e_ula: e.target.checked,
                  }))
                }
                onClick={() => setUpdate(true)}
                disabled={isLoading}
                checked={ishaCheck.takbir_e_ula}
                type="checkbox"
                className="checkbox checkbox-xs checkbox-secondary"
              />
            </div>
            <input
              onChange={(e) =>
                setIshaCheck((prv) => ({
                  ...prv,
                  complete: e.target.checked,
                }))
              }
              onClick={() => setUpdate(true)}
              disabled={isLoading}
              checked={ishaCheck.complete}
              type="checkbox"
              className="checkbox checkbox-primary"
            />
          </div>
        </div>
      </div>

      {/* <hr className="border-secondary mt-4" /> */}
    </section>
  );
};

export default Namaz;
