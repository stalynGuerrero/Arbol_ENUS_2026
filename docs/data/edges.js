/**
 * data/edges.js
 * Registro de conexiones (aristas/enlaces) del árbol de decisión.
 * Define el origen (source), destino (target) y etiquetas de transición opcionales.
 */

const EdgesData = [
    // ==========================================================================
    // JERARQUÍA DEL BLOQUE 1: CARACTERIZACIÓN (Flujo Estructural Base)
    // ==========================================================================
    { source: "cedula", target: "sexo" },
    { source: "sexo", target: "sexo_hombre" },
    { source: "sexo", target: "sexo_mujer" },
    
    { source: "sexo_hombre", target: "edad" },
    { source: "sexo_mujer", target: "edad" },
    
    { source: "edad", target: "grupo_edad_0_9" },
    { source: "edad", target: "grupo_edad_10_19" },
    { source: "edad", target: "grupo_edad_20_29" },
    { source: "edad", target: "grupo_edad_30_39" },
    { source: "edad", target: "grupo_edad_40_49" },
    { source: "edad", target: "grupo_edad_50_59" },
    { source: "edad", target: "grupo_edad_60_mas" },
    
    { source: "grupo_edad_0_9", target: "departamento" },
    { source: "grupo_edad_10_19", target: "departamento" },
    { source: "grupo_edad_20_29", target: "departamento" },
    { source: "grupo_edad_30_39", target: "departamento" },
    { source: "grupo_edad_40_49", target: "departamento" },
    { source: "grupo_edad_50_59", target: "departamento" },
    { source: "grupo_edad_60_mas", target: "departamento" },
    
    { source: "departamento", target: "depto_bogota" },
    { source: "departamento", target: "depto_oriental" },
    { source: "departamento", target: "depto_caribe" },
    { source: "departamento", target: "depto_central" },
    { source: "departamento", target: "depto_pacifica" },
    { source: "departamento", target: "depto_orinoquia" },
    
    { source: "depto_bogota", target: "zona" },
    { source: "depto_oriental", target: "zona" },
    { source: "depto_caribe", target: "zona" },
    { source: "depto_central", target: "zona" },
    { source: "depto_pacifica", target: "zona" },
    { source: "depto_orinoquia", target: "zona" },
    
    { source: "zona", target: "zona_urbano" },
    { source: "zona", target: "zona_rural" },
    
    { source: "zona_urbano", target: "regimen" },
    { source: "zona_rural", target: "regimen" },
    
    { source: "regimen", target: "regimen_contributivo" },
    { source: "regimen", target: "regimen_subsidiado" },

    // Conexión unificada de la caracterización hacia la pregunta trazadora B0
    { source: "regimen_contributivo", target: "pregunta_b0" },
    { source: "regimen_subsidiado", target: "pregunta_b0" },

    // ==========================================================================
    // ENRUTAMIENTO LÓGICO DE LAS 9 RUTAS (Filtros y Decisiones)
    // ==========================================================================
    
    // RUTA 1: B0 = NO -> EPS M1
    { source: "pregunta_b0", target: "eps_m1", label: "NO" },

    // B0 = SI -> Distribución a Entidades Gestoras principales
    { source: "pregunta_b0", target: "entidad_eps", label: "SI" },
    { source: "pregunta_b0", target: "entidad_ips", label: "SI" },
    { source: "pregunta_b0", target: "entidad_gestor", label: "SI" },

    // Flujo institucional dentro de la Empresa Prestadora (EPS)
    { source: "entidad_eps", target: "servicio_eps" },
    { source: "servicio_eps", target: "sub_ambulatorio_eps", label: "Ambulatorio" },
    { source: "servicio_eps", target: "sub_otro_eps", label: "Otro servicio" },
    
    // RUTA 2 y RUTA 3 (Módulos de salida de EPS)
    { source: "sub_ambulatorio_eps", target: "eps_m3" }, // Ruta 2 -> EPS M3
    { source: "sub_otro_eps", target: "eps_m2" },        // Ruta 3 -> EPS M2

    // Flujo institucional dentro de la Institución Prestadora (IPS)
    { source: "entidad_ips", target: "servicio_ips" },
    { source: "servicio_ips", target: "sub_ambulatorio_ips", label: "Ambulatorio" },
    { source: "servicio_ips", target: "sub_urgencias_ips", label: "Urgencias" },
    { source: "servicio_ips", target: "sub_internacion_ips", label: "Internación" },
    { source: "servicio_ips", target: "sub_quirurgico_ips", label: "Quirúrgico" },

    // RUTA 4, 5, 6 y 7 (Módulos de salida de IPS)
    { source: "sub_ambulatorio_ips", target: "ips_m1" }, // Ruta 4 -> IPS M1
    { source: "sub_urgencias_ips", target: "ips_m2" },   // Ruta 5 -> IPS M2
    { source: "sub_internacion_ips", target: "ips_m3" }, // Ruta 6 -> IPS M3
    { source: "sub_quirurgico_ips", target: "ips_m4" },   // Ruta 7 -> IPS M4

    // Flujo institucional dentro de la Entidad Gestora Farmacéutica
    { source: "entidad_gestor", target: "servicio_gestor" },
    { source: "servicio_gestor", target: "sub_medicamentos_gestor", label: "Medicamentos" },
    { source: "servicio_gestor", target: "sub_no_medicamentos_gestor", label: "No medicamentos" },

    // RUTA 8 y RUTA 9 (Módulos de salida de Gestor)
    { source: "sub_medicamentos_gestor", target: "gestor_m1" },   // Ruta 8 -> Gestor M1
    { source: "sub_no_medicamentos_gestor", target: "eps_m2" }    // Ruta 9 -> EPS M2 (Enrutamiento transversal)
];

// Congelar la colección para asegurar la inmutabilidad de la matriz topológica de enlaces
Object.freeze(EdgesData);