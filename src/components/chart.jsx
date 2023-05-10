import { ResponsiveLine } from "@nivo/line";

const data = [
    {
      id: "Recepción",
      color: "hsl(194, 70%, 50%)",
      data: [
        {
          x: "00:00hs",
          y: 2,
        },
        {
          x: "03:00hs",
          y: 1,
        },
        {
          x: "05:00hs",
          y: 2,
        },
        {
          x: "07:00hs",
          y: 1,
        },
        {
          x: "09:00hs",
          y: 3,
        },
        {
          x: "11:00hs",
          y: 6,
        },
        {
          x: "13:00hs",
          y: 10,
        },
        {
          x: "15:00hs",
          y: 2,
        },
        {
          x: "17:00hs",
          y: 9,
        },
        {
          x: "19:00hs",
          y: 1,
        },
        {
          x: "21:00hs",
          y: 0,
        },
        {
          x: "23:00hs",
          y: 1,
        },
      ],
    },
    {
      id: "Expedición",
      color: "hsl(161, 70%, 50%)",
      data: [
        {
          x: "00:00hs",
          y: 1,
        },
        {
          x: "03:00hs",
          y: 3,
        },
        {
          x: "05:00hs",
          y: 0,
        },
        {
          x: "07:00hs",
          y: 2,
        },
        {
          x: "09:00hs",
          y: 0,
        },
        {
          x: "11:00hs",
          y: 4,
        },
        {
          x: "13:00hs",
          y: 6,
        },
        {
          x: "15:00hs",
          y: 9,
        },
        {
          x: "17:00hs",
          y: 6,
        },
        {
          x: "19:00hs",
          y: 3,
        },
        {
          x: "21:00hs",
          y: 1,
        },
        {
          x: "23:00hs",
          y: 0,
        },
      ],
    }
];
  
const MyResponsiveLine = () => (
  <ResponsiveLine
    data={data}
    margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
    xScale={{ type: "point" }}
    yScale={{
      type: "linear",
      min: "auto",
      max: "auto",
      stacked: true,
      reverse: false,
    }}
    yFormat=" >-.2f"
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Flujo diario de camiones",
      legendOffset: 36,
      legendPosition: "middle",
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Cantidad",
      legendOffset: -40,
      legendPosition: "middle",
    }}
    colors={{scheme: "red_blue"}}
    lineWidth="4"
    pointSize={10}
    pointColor={{ theme: "background" }}
    pointBorderWidth={2}
    pointBorderColor={{ from: "serieColor" }}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 100,
        translateY: 0,
        itemsSpacing: 0,
        itemDirection: "left-to-right",
        itemWidth: 80,
        itemHeight: 20,
        itemOpacity: 0.75,
        symbolSize: 12,
        symbolShape: "circle",
        symbolBorderColor: "rgba(0, 0, 0, .5)",
        effects: [
          {
            on: "hover",
            style: {
              itemBackground: "rgba(0, 0, 0, .03)",
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default MyResponsiveLine;
