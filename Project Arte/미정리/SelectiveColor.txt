Shader "Custom/SelectiveColor"
{
    Properties
    {
        _MainTex ("Texture", 2D) = "white" {}
        _KeyColor ("Key Color", Color) = (1, 0, 0, 1) // 기본값: 빨간색
        _Threshold ("Threshold", Range(0, 1)) = 0.2
    }
    SubShader
    {
        Tags { "RenderType"="Opaque" }
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            #include "UnityCG.cginc"

            struct appdata_t {
                float4 vertex : POSITION;
                float2 uv : TEXCOORD0;
            };

            struct v2f {
                float2 uv : TEXCOORD0;
                float4 vertex : SV_POSITION;
            };

            sampler2D _MainTex;
            float4 _KeyColor;
            float _Threshold;

            v2f vert (appdata_t v)
            {
                v2f o;
                o.vertex = UnityObjectToClipPos(v.vertex);
                o.uv = v.uv;
                return o;
            }

            fixed4 frag (v2f i) : SV_Target
            {
                fixed4 col = tex2D(_MainTex, i.uv);
                float3 diff = abs(col.rgb - _KeyColor.rgb);
                float colorMatch = step(max(diff.r, max(diff.g, diff.b)), _Threshold);

                // 특정 색상만 유지하고 나머지는 흑백 처리
                float grayscale = dot(col.rgb, float3(0.3, 0.59, 0.11));
                return lerp(fixed4(grayscale, grayscale, grayscale, col.a), col, colorMatch);
            }
            ENDCG
        }
    }
}