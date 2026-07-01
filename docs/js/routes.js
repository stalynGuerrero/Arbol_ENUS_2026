/**
 * js/routes.js
 * Arquitectura de enrutamiento y lógica de trazabilidad de la encuesta.
 * Almacena e indexa secuencialmente los identificadores de nodos que componen cada ruta.
 */

class RoutesManager {
    constructor() {
        /**
         * Definición topológica secuencial de las 9 rutas del árbol de decisión.
         * Cada ruta contiene la lista exacta de nodos desde la raíz hasta el módulo final.
         */
        this.routes = {
            "ruta_1": {
                id: "ruta_1",
                name: "Ruta 1: Sin Uso de Servicios",
                description: "Evaluación de barreras de acceso en ciudadanos que responden NO a la pregunta trazadora B0.",
                nodes: [
                    "cedula", "sexo", "sexo_hombre", "sexo_mujer", "edad", 
                    "grupo_edad_0_9", "grupo_edad_10_19", "grupo_edad_20_29", "grupo_edad_30_39", 
                    "grupo_edad_40_49", "grupo_edad_50_59", "grupo_edad_60_mas",
                    "departamento", "depto_bogota", "depto_oriental", "depto_caribe", "depto_central", "depto_pacifica", "depto_orinoquia",
                    "zona", "zona_urbano", "zona_rural", "regimen", "regimen_contributivo", "regimen_subsidiado",
                    "pregunta_b0", "eps_m1"
                ]
            },
            "ruta_2": {
                id: "ruta_2",
                name: "Ruta 2: EPS - Ambulatorio",
                description: "Ciudadanos asistidos por EPS cuyo último servicio fue de tipo Ambulatorio (Consulta Externa) -> Redirige a EPS Módulo 3.",
                nodes: [
                    "cedula", "sexo", "sexo_hombre", "sexo_mujer", "edad", 
                    "grupo_edad_0_9", "grupo_edad_10_19", "grupo_edad_20_29", "grupo_edad_30_39", 
                    "grupo_edad_40_49", "grupo_edad_50_59", "grupo_edad_60_mas",
                    "departamento", "depto_bogota", "depto_oriental", "depto_caribe", "depto_central", "depto_pacifica", "depto_orinoquia",
                    "zona", "zona_urbano", "zona_rural", "regimen", "regimen_contributivo", "regimen_subsidiado",
                    "pregunta_b0", "entidad_eps", "servicio_eps", "sub_ambulatorio_eps", "eps_m3"
                ]
            },
            "ruta_3": {
                id: "ruta_3",
                name: "Ruta 3: EPS - Otro Servicio",
                description: "Ciudadanos asistidos por EPS que utilizaron servicios clasificados como Urgencias, Internación o Especializado -> Redirige a EPS Módulo 2.",
                nodes: [
                    "cedula", "sexo", "sexo_hombre", "sexo_mujer", "edad", 
                    "grupo_edad_0_9", "grupo_edad_10_19", "grupo_edad_20_29", "grupo_edad_30_39", 
                    "grupo_edad_40_49", "grupo_edad_50_59", "grupo_edad_60_mas",
                    "departamento", "depto_bogota", "depto_oriental", "depto_caribe", "depto_central", "depto_pacifica", "depto_orinoquia",
                    "zona", "zona_urbano", "zona_rural", "regimen", "regimen_contributivo", "regimen_subsidiado",
                    "pregunta_b0", "entidad_eps", "servicio_eps", "sub_otro_eps", "eps_m2"
                ]
            },
            "ruta_4": {
                id: "ruta_4",
                name: "Ruta 4: IPS - Ambulatorio",
                description: "Gestión directa en IPS para atención ambulatoria básica y consultas externas médicas -> Redirige a IPS Módulo 1.",
                nodes: [
                    "cedula", "sexo", "sexo_hombre", "sexo_mujer", "edad", 
                    "grupo_edad_0_9", "grupo_edad_10_19", "grupo_edad_20_29", "grupo_edad_30_39", 
                    "grupo_edad_40_49", "grupo_edad_50_59", "grupo_edad_60_mas",
                    "departamento", "depto_bogota", "depto_oriental", "depto_caribe", "depto_central", "depto_pacifica", "depto_orinoquia",
                    "zona", "zona_urbano", "zona_rural", "regimen", "regimen_contributivo", "regimen_subsidiado",
                    "pregunta_b0", "entidad_ips", "servicio_ips", "sub_ambulatorio_ips", "ips_m1"
                ]
            },
            "ruta_5": {
                id: "ruta_5",
                name: "Ruta 5: IPS - Urgencias",
                description: "Atención de emergencias médicas de complejidad variable ejecutada dentro de la red hospitalaria -> Redirige a IPS Módulo 2.",
                nodes: [
                    "cedula", "sexo", "sexo_hombre", "sexo_mujer", "edad", 
                    "grupo_edad_0_9", "grupo_edad_10_19", "grupo_edad_20_29", "grupo_edad_30_39", 
                    "grupo_edad_40_49", "grupo_edad_50_59", "grupo_edad_60_mas",
                    "departamento", "depto_bogota", "depto_oriental", "depto_caribe", "depto_central", "depto_pacifica", "depto_orinoquia",
                    "zona", "zona_urbano", "zona_rural", "regimen", "regimen_contributivo", "regimen_subsidiado",
                    "pregunta_b0", "entidad_ips", "servicio_ips", "sub_urgencias_ips", "ips_m2"
                ]
            },
            "ruta_6": {
                id: "ruta_6",
                name: "Ruta 6: IPS - Internación",
                description: "Población hospitalizada con pernoctación prolongada y asignación de cama clínica -> Redirige a IPS Módulo 3.",
                nodes: [
                    "cedula", "sexo", "sexo_hombre", "sexo_mujer", "edad", 
                    "grupo_edad_0_9", "grupo_edad_10_19", "grupo_edad_20_29", "grupo_edad_30_39", 
                    "grupo_edad_40_49", "grupo_edad_50_59", "grupo_edad_60_mas",
                    "departamento", "depto_bogota", "depto_oriental", "depto_caribe", "depto_central", "depto_pacifica", "depto_orinoquia",
                    "zona", "zona_urbano", "zona_rural", "regimen", "regimen_contributivo", "regimen_subsidiado",
                    "pregunta_b0", "entidad_ips", "servicio_ips", "sub_internacion_ips", "ips_m3"
                ]
            },
            "ruta_7": {
                id: "ruta_7",
                name: "Ruta 7: IPS - Quirúrgico",
                description: "Procedimientos e intervenciones quirúrgicas mayores o menores realizadas en salas de cirugía -> Redirige a IPS Módulo 4.",
                nodes: [
                    "cedula", "sexo", "sexo_hombre", "sexo_mujer", "edad", 
                    "grupo_edad_0_9", "grupo_edad_10_19", "grupo_edad_20_29", "grupo_edad_30_39", 
                    "grupo_edad_40_49", "grupo_edad_50_59", "grupo_edad_60_mas",
                    "departamento", "depto_bogota", "depto_oriental", "depto_caribe", "depto_central", "depto_pacifica", "depto_orinoquia",
                    "zona", "zona_urbano", "zona_rural", "regimen", "regimen_contributivo", "regimen_subsidiado",
                    "pregunta_b0", "entidad_ips", "servicio_ips", "sub_quirurgico_ips", "ips_m4"
                ]
            },
            "ruta_8": {
                id: "ruta_8",
                name: "Ruta 8: Gestor - Medicamentos",
                description: "Acceso gestionado para entrega efectiva de insumos médicos y fórmulas farmacológicas -> Redirige a Gestor Módulo 1.",
                nodes: [
                    "cedula", "sexo", "sexo_hombre", "sexo_mujer", "edad", 
                    "grupo_edad_0_9", "grupo_edad_10_19", "grupo_edad_20_29", "grupo_edad_30_39", 
                    "grupo_edad_40_49", "grupo_edad_50_59", "grupo_edad_60_mas",
                    "departamento", "depto_bogota", "depto_oriental", "depto_caribe", "depto_central", "depto_pacifica", "depto_orinoquia",
                    "zona", "zona_urbano", "zona_rural", "regimen", "regimen_contributivo", "regimen_subsidiado",
                    "pregunta_b0", "entidad_gestor", "servicio_gestor", "sub_medicamentos_gestor", "gestor_m1"
                ]
            },
            "ruta_9": {
                id: "ruta_9",
                name: "Ruta 9: Gestor - No Medicamentos",
                description: "Población que acudió al Gestor Farmacéutico para trámites administrativos u otros servicios no médicos -> Redirige transversalmente a EPS Módulo 2.",
                nodes: [
                    "cedula", "sexo", "sexo_hombre", "sexo_mujer", "edad", 
                    "grupo_edad_0_9", "grupo_edad_10_19", "grupo_edad_20_29", "grupo_edad_30_39", 
                    "grupo_edad_40_49", "grupo_edad_50_59", "grupo_edad_60_mas",
                    "departamento", "depto_bogota", "depto_oriental", "depto_caribe", "depto_central", "depto_pacifica", "depto_orinoquia",
                    "zona", "zona_urbano", "zona_rural", "regimen", "regimen_contributivo", "regimen_subsidiado",
                    "pregunta_b0", "entidad_gestor", "servicio_gestor", "sub_no_medicamentos_gestor", "eps_m2"
                ]
            }
        };
        Object.freeze(this.routes);
    }

    /**
     * Obtiene la estructura inmutable de una ruta por su ID.
     * @param {string} routeId
     * @returns {Object|null}
     */
    getRoute(routeId) {
        return this.routes[routeId] || null;
    }

    /**
     * Obtiene todas las rutas registradas.
     * @returns {Object}
     */
    getAllRoutes() {
        return this.routes;
    }

    /**
     * Retorna un arreglo con las rutas que contienen a un nodo específico.
     * Útil para poblar el panel dinámico lateral.
     * @param {string} nodeId 
     * @returns {Array<Object>}
     */
    getRoutesByNode(nodeId) {
        const matchingRoutes = [];
        for (const key in this.routes) {
            if (this.routes[key].nodes.includes(nodeId)) {
                matchingRoutes.push(this.routes[key]);
            }
        }
        return matchingRoutes;
    }

    /**
     * Calcula el camino real desde la raíz del árbol (Cédula) hasta el nodo indicado.
     *
     * Los Bloques 1 y 2 (caracterización + pregunta trazadora B0) son un tronco común:
     * cada pregunta reconverge en una única siguiente pregunta sin importar la respuesta
     * previa (ej. Departamento sigue igual sea cual sea el Sexo o el Grupo de Edad elegido).
     * Elegir una sola rama "primera" ahí producía siempre el mismo camino arbitrario
     * (Hombre > 0-9 > Bogotá > Urbano > Contributivo). En su lugar, para ese tramo se listan
     * TODAS las opciones de cada nivel inferior y solo el nodo propio en el nivel del clic.
     *
     * Los Bloques 3 y 4 (Entidad > Servicio > Módulo) sí son una bifurcación real, así que
     * ese tramo se reconstruye remontando las aristas específicas hasta la pregunta B0.
     *
     * @param {string} nodeId
     * @returns {Array<string>} Secuencia de IDs de nodos desde la raíz hasta el nodo.
     */
    computePathToNode(nodeId) {
        const ranks = window.treeLayoutEngine.assignRanks();
        const targetRank = ranks[nodeId];
        if (targetRank === undefined) return [nodeId];

        const traceRank = ranks["pregunta_b0"];
        const sharedUpperRank = Math.min(targetRank, traceRank);

        const path = [];
        for (let r = 0; r <= sharedUpperRank; r++) {
            NodesData.forEach(node => {
                if (ranks[node.id] === r && (r < targetRank || node.id === nodeId)) {
                    path.push(node.id);
                }
            });
        }

        // Tramo institucional real (Bloques 3 y 4), remontado nodo a nodo desde el clic hasta B0
        if (targetRank > traceRank) {
            const institutionalPath = [nodeId];
            const visited = new Set([nodeId]);
            let current = nodeId;

            while (ranks[current] > traceRank) {
                const parentEdge = EdgesData.find(edge => edge.target === current && !visited.has(edge.source));
                if (!parentEdge) break;
                institutionalPath.unshift(parentEdge.source);
                visited.add(parentEdge.source);
                current = parentEdge.source;
            }

            path.push(...institutionalPath.filter(id => id !== "pregunta_b0"));
        }

        return path;
    }
}

// Exportar la instancia única del gestor de rutas al entorno global de la aplicación
window.routesManager = new RoutesManager();