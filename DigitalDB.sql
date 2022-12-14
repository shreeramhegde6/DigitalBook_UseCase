USE [master]
GO
/****** Object:  Database [DigitalBookDB]    Script Date: 13-10-2022 17:16:49 ******/
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
/****** Object:  Table [dbo].[tblBuybook]    Script Date: 13-10-2022 17:16:49 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblBuybook](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[BookId] [int] NOT NULL,
	[Price] [varchar](50) NOT NULL,
	[Contents] [varchar](max) NULL,
	[Image] [varchar](50) NULL,
	[User] [varchar](50) NOT NULL,
	[Buydate] [datetime] NULL,
 CONSTRAINT [PK_tblBuybook] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblCreatebook]    Script Date: 13-10-2022 17:16:49 ******/
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
	[Contents] [varchar](max) NULL,
	[AuthorEmail] [varchar](50) NOT NULL,
	[Creationdate] [datetime] NULL,
	[ActiveFlag] [bit] NULL,
 CONSTRAINT [PK_tblCreatebook] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblImage]    Script Date: 13-10-2022 17:16:49 ******/
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
/****** Object:  Table [dbo].[tblLogin]    Script Date: 13-10-2022 17:16:49 ******/
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
/****** Object:  Table [dbo].[tblLoginFlag]    Script Date: 13-10-2022 17:16:49 ******/
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
/****** Object:  Table [dbo].[tblReaderLogin]    Script Date: 13-10-2022 17:16:49 ******/
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

INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (2, 1028, N'j', N'som', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (4, 1033, N'l', N'o', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (5, 1035, N'k', N'js', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (6, 1035, N'k', N'js', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (7, 1035, N'k', N'js', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (8, 1028, N'j', N'som', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (9, 1028, N'j', N'som', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (10, 1028, N'j', N'som', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (11, 1028, N'j', N'som', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (12, 1028, N'j', N'som', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (13, 3044, N'1000', N'Some Details', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (14, 3044, N'1000', N'Some Details', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (15, 3044, N'1000', N'Some Details', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (16, 3044, N'1000', N'Some Details', N'coffee-g3400f5352_192020221007232513.jpg', N'Shree@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (17, 3044, N'1000', N'Some Details', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (18, 3046, N'1000', N'so.,', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (19, 1035, N'k', N'js', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (20, 1035, N'k', N'js', N'coffee-g3400f5352_192020221007232513.jpg', N'readTest@gmail.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (25, 3044, N'1000', N'Some Details', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (26, 3044, N'1000', N'Some Details', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (27, 1028, N'j', N'som', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (28, 1028, N'j', N'som', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (29, 1028, N'j', N'som', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (48, 3058, N'1234', N'sds', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (49, 3058, N'1234', N'sds', N'coffee-g3400f5352_192020221007232513.jpg', N'read@a.com', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (52, 1028, N'string', N'string', N'coffee-g3400f5352_192020221007232513.jpg', N'string', CAST(N'2022-10-04T22:15:18.647' AS DateTime))
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (57, 3057, N'string', N'string', N'coffee-g3400f5352_192020221007232513.jpg', N'string', NULL)
INSERT [dbo].[tblBuybook] ([Id], [BookId], [Price], [Contents], [Image], [User], [Buydate]) VALUES (72, 3093, N'1300', N'Item info..', N'reading-g59284d829_192020221010131752.jpg', N'read@a.com', CAST(N'2022-10-10T13:18:43.707' AS DateTime))
SET IDENTITY_INSERT [dbo].[tblBuybook] OFF
GO
SET IDENTITY_INSERT [dbo].[tblCreatebook] ON 

INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (1028, N'j', N'j', N'Images/logo.jpg', N'j', N'j', N'no', N'som', N'read@a.com', CAST(N'2022-09-24T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (1033, N'l', N'l', N'Images\books-gae1cc3bab_1920.jpg', N'l', N'l', N'l', N'o', N's@a.com', CAST(N'2022-09-25T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (1034, N'New', N'New', N'Images\book-g83cd480e4_640.jpg', N'sqs', N'sws', N'w', N'e', N'read@a.com', CAST(N'2022-09-25T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3070, N's', N's', N'Images\rnm.jpg', N'11', N'w', N'true', N'wd', N's@a.com', CAST(N'2022-10-07T00:00:00.000' AS DateTime), 0)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3075, N'2nd image', N'Novel', N'rnm20221007173039.jpg', N'1234', N'rf', N'true', N'f', N'shree@a.com', CAST(N'2022-10-07T00:00:00.000' AS DateTime), 0)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3076, N'testImage', N'Environmental', N'coffee-g3400f5352_192020221007232513.jpg', N'234', N'tgg', N'true', N'yh', N'shree@a.com', CAST(N'2022-10-07T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3089, N'Somerset', N'Environmental', N'Images/logo.jpg', N'2985', N'd', N'true', N'This is the story of Kalam''s own rise from obscurity and his personal and professional struggles, ', N'shree@a.com', CAST(N'2022-10-09T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3092, N'Word', N'General', N'pinterest-icon20221010095447.jpg', N'200', N'Shrinivas', N'true', N'details', N'shree@a.com', CAST(N'2022-10-10T00:00:00.000' AS DateTime), 1)
INSERT [dbo].[tblCreatebook] ([ID], [Title], [Category], [Image], [Price], [Publisher], [Active], [Contents], [AuthorEmail], [Creationdate], [ActiveFlag]) VALUES (3093, N'The forest', N'Environmental', N'reading-g59284d829_192020221010131752.jpg', N'1295', N'Genpack', N'true', N'Item info..', N'Shree@a.com', CAST(N'2022-10-10T00:00:00.000' AS DateTime), 1)
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
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2007, N'shree@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2008, N's@a.comm', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2009, N'shree1@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2010, N'author@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2011, N'Shree@gmail.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2012, N'shree@gmail.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2013, N's@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2014, N'Shree@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2015, N'shree@a.com', N'1234')
INSERT [dbo].[tblLogin] ([ID], [UserName], [Password]) VALUES (2016, N'shree@a.com', N'1234')
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
INSERT [dbo].[tblReaderLogin] ([ID], [UserName], [Password]) VALUES (1004, N'sh@a.com', N'1234')
INSERT [dbo].[tblReaderLogin] ([ID], [UserName], [Password]) VALUES (1005, N'read@a.comm', N'1234')
INSERT [dbo].[tblReaderLogin] ([ID], [UserName], [Password]) VALUES (1006, N'Shree@gmail.com', N'1234')
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
