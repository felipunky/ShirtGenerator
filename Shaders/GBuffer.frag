#version 300 es
precision mediump float;

layout (location = 0) out vec3 gPosition;
layout (location = 1) out vec3 gNormal;
layout (location = 2) out vec3 gAlbedo;
layout (location = 3) out vec3 gMetallic;
layout (location = 4) out vec3 gRoughness;
layout (location = 5) out vec3 gAO;

in vec3 positions;
in vec3 normals;                                                          
in vec2 texCoords;
uniform sampler2D BaseColor;
uniform sampler2D Normal;        
uniform sampler2D Roughness;
uniform sampler2D Metallic;
uniform sampler2D AmbientOcclussion; 

void main()
{    
    // store the fragment position vector in the first gbuffer texture
    gPosition = positions;
    // also store the per-fragment normals into the gbuffer
    gNormal = normalize(texture(Normal, texCoords).xyz);
    // and the diffuse per-fragment color
    gAlbedo = texture(BaseColor, texCoords).rgb;
    gMetallic = texture(Metallic, texCoords).rgb;
    gRoughness = texture(Roughness, texCoords).rgb;
    gAO = texture(AmbientOcclussion, texCoords).rgb;
}