import { useState, useEffect } from "react";
import axios from "axios";
import Papa from "papaparse";

export default function useProductos() {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCsv = async () => {
            try {
                const response = await axios.get(
                    "https://docs.google.com/spreadsheets/d/14ZVwdV_VuAqOuUj_cNsZFjKMfKpw7-TsC6JxDs01R9w/export?format=csv"
                );

                // Parseo del CSV con PapaParse
                const parsed = Papa.parse(response.data, {
                    header: true,
                    skipEmptyLines: true,
                });

                setProductos(parsed.data);
            } catch (err) {
                setError("No se pudieron cargar los productos");
            } finally {
                setLoading(false);
            }
        };

        fetchCsv();
    }, []);

    return { productos, loading, error };
}
