import { Environment, Lightformer, SpotLight } from "@react-three/drei"

const StudioLights = () => {
    return (
        <group name="lights">
            <Environment resolution={256}>
                <Lightformer
                    form="rect"
                    position={[-10, 5, -5]}
                    intensity={10}
                    scale={10}
                    rotation={[0, Math.PI / 2, 0]}
                />
                <Lightformer
                    form="rect"
                    position={[10, 0, -5]}
                    intensity={10}
                    scale={10}
                    rotation={[0, Math.PI / 2, 0]}
                />
            </Environment>
            <SpotLight
                position={[-2, 10, 5]}
                angle={0.15}
                decay={0}
                intensity={Math.PI * 0.2}
            />
        </group>
    )
}

export default StudioLights