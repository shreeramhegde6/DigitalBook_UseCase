USE [master]
GO
/****** Object:  Database [DigitalBookDB]    Script Date: 06-10-2022 16:31:38 ******/
CREATE DATABASE [DigitalBookDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DigitalBookDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\DigitalBookDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DigitalBookDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.MSSQLSERVER\MSSQL\DATA\DigitalBookDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [DigitalBookDB] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DigitalBookDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DigitalBookDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DigitalBookDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DigitalBookDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DigitalBookDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DigitalBookDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [DigitalBookDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DigitalBookDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DigitalBookDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DigitalBookDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DigitalBookDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DigitalBookDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DigitalBookDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DigitalBookDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DigitalBookDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DigitalBookDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DigitalBookDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DigitalBookDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DigitalBookDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DigitalBookDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DigitalBookDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DigitalBookDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DigitalBookDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DigitalBookDB] SET RECOVERY FULL 
GO
ALTER DATABASE [DigitalBookDB] SET  MULTI_USER 
GO
ALTER DATABASE [DigitalBookDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DigitalBookDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DigitalBookDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DigitalBookDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DigitalBookDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DigitalBookDB] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
EXEC sys.sp_db_vardecimal_storage_format N'DigitalBookDB', N'ON'
GO
ALTER DATABASE [DigitalBookDB] SET QUERY_STORE = OFF
GO
USE [DigitalBookDB]
GO
/****** Object:  Table [dbo].[tblBuybook]    Script Date: 06-10-2022 16:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblBuybook](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[BookId] [int] NOT NULL,
	[Price] [varchar](50) NOT NULL,
	[Contents] [varchar](50) NOT NULL,
	[Image] [varchar](50) NULL,
	[User] [varchar](50) NOT NULL,
 CONSTRAINT [PK_tblBuybook] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblCreatebook]    Script Date: 06-10-2022 16:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblCreatebook](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [varchar](50) NOT NULL,
	[Category] [varchar](50) NOT NULL,
	[Image] [varchar](50) NOT NULL,
	[Price] [varchar](50) NOT NULL,
	[Publisher] [varchar](50) NOT NULL,
	[Active] [varchar](50) NOT NULL,
	[Contents] [varchar](50) NOT NULL,
	[AuthorEmail] [varchar](50) NOT NULL,
	[Creationdate] [datetime] NULL,
	[ActiveFlag] [bit] NULL,
 CONSTRAINT [PK_tblCreatebook] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblImage]    Script Date: 06-10-2022 16:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblImage](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[ImageUrl] [nvarchar](50) NULL,
 CONSTRAINT [PK_tblImage] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblLogin]    Script Date: 06-10-2022 16:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblLogin](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_tblLogin] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblLoginFlag]    Script Date: 06-10-2022 16:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblLoginFlag](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[CheckFlag] [int] NULL,
	[Creationdate] [datetime] NULL,
 CONSTRAINT [PK_tblLoginFlag] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblReaderLogin]    Script Date: 06-10-2022 16:31:38 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblReaderLogin](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
 CONSTRAINT [PK_tblReaderLogin] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[tblBuybook] ON 

INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (2, 1028, N'j', N'som', N'Images/logo.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (4, 1033, N'l', N'o', N'Images\books-gae1cc3bab_1920.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (5, 1035, N'k', N'js', NULL, N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (6, 1035, N'k', N'js', N'Images\reading-g59284d829_1920.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (7, 1035, N'k', N'js', N'Images\reading-g59284d829_1920.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (8, 1028, N'j', N'som', N'Images/logo.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (9, 1028, N'j', N'som', N'Images/logo.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (10, 1028, N'j', N'som', N'Images/logo.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (11, 1028, N'j', N'som', N'Images/logo.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (12, 1028, N'j', N'som', N'Images/logo.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (13, 3044, N'1000', N'Some Details', N'Images\rnm.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (14, 3044, N'1000', N'Some Details', N'Images\rnm.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (15, 3044, N'1000', N'Some Details', N'Images\rnm.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (16, 3044, N'1000', N'Some Details', N'Images\rnm.jpg', N'Shree@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (17, 3044, N'1000', N'Some Details', N'Images\rnm.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (18, 3046, N'1000', N'so.,', N'Images\coffee-g3400f5352_1920.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (19, 1035, N'k', N'js', N'Images\reading-g59284d829_1920.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (20, 1035, N'k', N'js', N'Images\reading-g59284d829_1920.jpg', N'readTest@gmail.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (21, 3044, N'1000', N'Some Details', N'Images\rnm.jpg', N'readTest@gmail.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (22, 3044, N'1000', N'Some Details', N'Images\rnm.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (25, 3044, N'1000', N'Some Details', N'Images\rnm.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (26, 3044, N'1000', N'Some Details', N'Images\rnm.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (27, 1028, N'j', N'som', N'Images/logo.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (28, 1028, N'j', N'som', N'Images/logo.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (29, 1028, N'j', N'som', N'Images/logo.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (48, 3058, N'1234', N'sds', N'Imagesnm.jpg', N'read@a.com')
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User]) VALUES (49, 3058, N'1234', N'sds', N'Imagesnm.jpg', N'read@a.com')
SET IDENTITY_INSERT [dbo].[tblBuybook] OFF
GO
SET IDENTITY_INSERT [dbo].[tblCreatebook] ON 

INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (1028, N'j', N'j', N'Images/logo.jpg', N'j', N'j', N'no', N'som', N'read@a.com', CAST(N'2022-09-24T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (1033, N'l', N'l', N'Images\books-gae1cc3bab_1920.jpg', N'l', N'l', N'l', N'o', N's@a.com', CAST(N'2022-09-25T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (1034, N'New', N'New', N'Images\book-g83cd480e4_640.jpg', N'sqs', N'sws', N'w', N'e', N'read@a.com', CAST(N'2022-09-25T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3031, N'IndusValley', N'Environmental', N'Images/logo.jpg', N'2054', N'EnvOrg', N'true', N'Details of Indus Valley Port..', N'shree@a.com', CAST(N'2022-09-27T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3044, N'Green', N'Env', N'Images\rnm.jpg', N'1000', N'System', N'Y', N'Some Details', N'shree@a.com', CAST(N'2022-09-27T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3046, N'Example', N'Env', N'Images\coffee-g3400f5352_1920.jpg', N'1000', N'Sytem', N'Yes', N'so.,', N'shree@a.com', CAST(N'2022-09-28T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3048, N'test', N'test', N'Images\books-gae1cc3bab_1920.jpg', N'100', N'test', N'true', N'ask', N'shree@a.com', CAST(N'2022-09-28T00:00:00.000' AS DateTime), 0)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3050, N'edited demo', N'l', N'Images/logo.jpg', N'300', N'l', N'true', N'Demo', N'shree@a.com', CAST(N'2022-10-01T00:00:00.000' AS DateTime), 0)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3051, N'dummy', N'j', N'Images\rnm.jpg', N'1234', N'kh', N'true', N'hghg', N'shree@a.com', CAST(N'2022-10-01T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3052, N'new', N'new', N'Images\books-gae1cc3bab_1920.jpg', N'190', N'H', N'false', N'model', N'shree@a.com', CAST(N'2022-10-02T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3053, N'k', N'k', N'Images\rnm.jpg', N'500', N'k', N'true', N'ded', N'shree@a.com', CAST(N'2022-10-02T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3055, N'Gate123', N'General', N'Images/logo.jpg', N'123', N'hi', N'true', N'33e', N'shree@a.com', CAST(N'2022-10-02T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3056, N'Gate', N'General', N'Images\books-gae1cc3bab_1920.jpg', N'123', N'hi', N'true', N'33e', N'shree@a.com', CAST(N'2022-10-02T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3057, N'jh', N'Novel', N'Images\rnm.jpg', N'1234', N'4', N'false', N'5', N'shree@a.com', CAST(N'2022-10-02T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3058, N'd', N'Environmental', N'Images\rnm.jpg', N'1214', N'qw', N'true', N'dded', N'shree@a.com', CAST(N'2022-10-02T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3059, N'h', N'Comics', N'Images\books-gae1cc3bab_1920.jpg', N'1000', N'pub', N'true', N'ee', N'shree@a.com', CAST(N'2022-10-04T00:00:00.000' AS DateTime), 0)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3060, N's', N'Comics', N'Images\books-gae1cc3bab_1920.jpg', N'123', N'ed', N'false', N'edccdccdd', N'shree@a.com', CAST(N'2022-10-04T00:00:00.000' AS DateTime), 0)
SET IDENTITY_INSERT [dbo].[tblCreatebook] OFF
GO
SET IDENTITY_INSERT [dbo].[tblImage] ON 

INSERT [dbo].[tblImage] ([Id], [ImageUrl]) VALUES (1, N'Images\logo.jpg')
SET IDENTITY_INSERT [dbo].[tblImage] OFF
GO
SET IDENTITY_INSERT [dbo].[tblLogin] ON 

INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (1, N's@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2, N'Shree@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (3, N'dhree@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (4, N'shree@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (5, N'Shree@a.com', N'12345')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (8, N'shree@a.com', N'12345')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (9, N'shree@a.com', N'12345')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (10, N'', N'')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (11, N'string', N'string')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (12, N'shree@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (13, N'shree@a.com', N'12')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (14, N'shree@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (15, N'shree@a.com', N'112234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (1002, N'shree', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (1003, N'Shree@gmail.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2002, N'Shree@gmail.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2003, N'shreehegde@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2004, N'test@gmail.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2005, N'shree@a2.com', N'1234')
SET IDENTITY_INSERT [dbo].[tblLogin] OFF
GO
SET IDENTITY_INSERT [dbo].[tblLoginFlag] ON 

INSERT [dbo].[tblLoginFlag] ([ID], [UserName], [Password], [CheckFlag], [Creationdate]) VALUES (1, N'string', N'string', 0, CAST(N'2022-09-23T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[tblLoginFlag] OFF
GO
SET IDENTITY_INSERT [dbo].[tblReaderLogin] ON 

INSERT [dbo].[tblReaderLogin] ([ID], [UserName], [Password]) VALUES (1, N'sone', N'string')
INSERT [dbo].[tblReaderLogin] ([ID], [UserName], [Password]) VALUES (2, N'read@a.com', N'1234')
INSERT [dbo].[tblReaderLogin] ([ID], [UserName], [Password]) VALUES (1002, N'readTest@gmail.com', N'1234')
INSERT [dbo].[tblReaderLogin] ([ID], [UserName], [Password]) VALUES (1003, N'r@a.com', N'1234')
SET IDENTITY_INSERT [dbo].[tblReaderLogin] OFF
GO
ALTER TABLE [dbo].[tblBuybook]  WITH CHECK ADD  CONSTRAINT [FK_tblBuybook_tblBuybook] FOREIGN KEY([Id])
REFERENCES [dbo].[tblBuybook] ([Id])
GO
ALTER TABLE [dbo].[tblBuybook] CHECK CONSTRAINT [FK_tblBuybook_tblBuybook]
GO
USE [master]
GO
ALTER DATABASE [DigitalBookDB] SET  READ_WRITE 
GO
