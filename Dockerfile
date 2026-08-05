# Giai đoạn Build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["OISM.API.csproj", "./"]
RUN dotnet restore "OISM.API.csproj"
COPY . .
RUN dotnet publish -c Release -o /app/publish

# Giai đoạn chạy Runtime
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "OISM.API.dll"]